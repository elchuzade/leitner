import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import ThemeTextarea from "../../components/theme/themeTextarea/ThemeTextarea";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_CARD } from "../../queries/cardQueries";
import { UPDATE_CARD, ADD_CARD } from "../../mutations/cardMutations";
import { GET_CARDS } from "../../queries/cardQueries";
import BackButton from "../../components/topNavigation/BackButton";

interface Props {}

const NewCard = ({}: Props) => {
  const navigate = useNavigate();
  const { projectId, cardId } = useParams();

  const [title, setTitle] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [stage, setStage] = useState<Number>(1);

  const [getCardRes, cardRes] = useLazyQuery(GET_CARD, {
    variables: { cardId },
  });

  const [updateCard, updateCardRes] = useMutation(UPDATE_CARD, {
    variables: { cardId, title, hint, description, answer, stage },
  });

  const [addCard, addCardRes] = useMutation(ADD_CARD, {
    variables: { projectId, title, hint, description, answer, stage },
    refetchQueries: [{ query: GET_CARDS, variables: { projectId } }],
  });

  useEffect(() => {
    // If cardId exists then it is edit project so fetch the project, else it is add project
    if (cardId) {
      getCardRes();
    }
  }, []);

  useEffect(() => {
    if (updateCardRes?.data?.updateCard || addCardRes?.data?.addCard) {
      navigate(`/projects/${projectId}`);
    }
  }, [updateCardRes, addCardRes]);

  useEffect(() => {
    setTitle(cardRes?.data?.card?.title || "");
    setHint(cardRes?.data?.card?.hint || "");
    setDescription(cardRes?.data?.card?.description || "");
    setAnswer(cardRes?.data?.card?.answer || "");
    setStage(cardRes?.data?.card?.stage || 1);
  }, [cardRes]);

  const onSaveCard = () => {
    if (title) {
      if (cardId) {
        updateCard();
      } else {
        addCard();
      }
    }
  };

  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <BackButton />
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="card">
          <div className="card-new">
            <ThemeTitle>{cardId ? "Edit" : "Add"} Card</ThemeTitle>
            <ThemeInput
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              type="title"
              placeholder="title"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
            <ThemeInput
              value={hint}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHint(e.target.value)
              }
              type="hint"
              placeholder="hint"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
            <ThemeTextarea
              value={description}
              rows={6}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              placeholder="description"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "12px" }}
            />
            <ThemeInput
              value={answer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAnswer(e.target.value)
              }
              type="answer"
              placeholder="answer"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
          </div>
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton onClick={onSaveCard} color="theme-blue" shadow fill>
          Save
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default NewCard;
