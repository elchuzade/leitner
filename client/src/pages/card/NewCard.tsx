import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import ThemeTextarea from "../../components/theme/themeTextarea/ThemeTextarea";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { IoChevronBackOutline } from "react-icons/io5";

interface Props {}

const NewCard = ({}: Props) => {
  const { id, cardId } = useParams();

  const [title, setTitle] = useState<string>("");
  const [hint, setHint] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    console.log(id, cardId);
  }, [id, cardId]);

  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <ThemeButton
          link="/projects/123/cards"
          small
          color="theme-light"
          shadow
          icon
          style={{ marginRight: "auto" }}
        >
          <IoChevronBackOutline />
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="card">
          <div className="card-new">
            <ThemeTitle>Add Card</ThemeTitle>
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
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Save
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default NewCard;
