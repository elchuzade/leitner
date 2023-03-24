import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import CardSection from "../../components/card/cardSection/CardSection";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { GET_CARDS } from "../../queries/cardQueries";
import { useQuery } from "@apollo/client";
import { filterCards } from "../../utils/cardsUtils";
import BackButton from "../../components/topNavigation/BackButton";

interface Props {}

const Practice = ({}: Props) => {
  const { projectId, stage } = useParams();

  const [index, setIndex] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [showLevel, setShowLevel] = useState(0); // 0 - title, 1 - hint, 2 - description, 3 - answer

  const cardsRes = useQuery(GET_CARDS, {
    variables: { projectId },
  });

  useEffect(() => {
    let stageCards: Card[] =
      filterCards(cardsRes?.data?.cards, Number(stage)) || [];
    setCards(stageCards);
  }, [cardsRes, stage]);

  const onClickCard = (section: string, index: number) => {
    console.log(section, index);
    setShowLevel(index);
  };

  const getPrevWord = () => {
    if (index > 0) {
      setIndex(index - 1);
      console.log("prev");
      setShowLevel(0);
    }
  };

  const getNextWord = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      console.log("next");
      setShowLevel(0);
    }
  };

  const makeWordRight = () => {
    console.log(cards[index], index, "right");
  };

  const makeWordWrong = () => {
    console.log(cards[index], index, "wrong");
  };

  return (
    <div className="wrapper">
      <TopNavigation>
        <BackButton />
        <ThemeButton
          link={`/projects/${projectId}/card/${cards[index]?.id}`}
          small
          color="theme-light"
          icon
          shadow
        >
          <HiOutlinePencil />
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div
          className="card-sections"
          style={{ marginLeft: "40px", marginRight: "40px" }}
        >
          {cards[index]?.title && (
            <div onClick={() => onClickCard("title", 0)}>
              <CardSection
                section="title"
                card={cards[index]}
                hover
                show={showLevel >= 0}
              />
            </div>
          )}
          {cards[index]?.hint && (
            <div onClick={() => onClickCard("hint", 1)}>
              <CardSection
                section="hint"
                card={cards[index]}
                hover
                show={showLevel >= 1}
              />
            </div>
          )}
          {cards[index]?.description && (
            <div onClick={() => onClickCard("description", 2)}>
              <CardSection
                section="description"
                card={cards[index]}
                hover
                show={showLevel >= 2}
              />
            </div>
          )}
          {cards[index]?.answer && (
            <div onClick={() => onClickCard("answer", 3)}>
              <CardSection
                section="answer"
                card={cards[index]}
                hover
                show={showLevel >= 3}
              />
            </div>
          )}
        </div>
        <div className="practice-button-section">
          {index > 0 && (
            <div className="practice-button-wrapper practice-button-wrapper-left">
              <button onClick={getPrevWord} className="practice-button">
                <IoChevronBackOutline />
              </button>
            </div>
          )}
          {index < cards.length - 1 && (
            <div className="practice-button-wrapper practice-button-wrapper-right">
              <button onClick={getNextWord} className="practice-button">
                <IoChevronForwardOutline />
              </button>
            </div>
          )}
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton
          color="theme-red"
          shadow
          fill
          style={{ marginRight: "8px" }}
          onClick={makeWordWrong}
        >
          Wrong
        </ThemeButton>
        <ThemeButton
          color="theme-green"
          shadow
          fill
          style={{ marginLeft: "8px" }}
          onClick={makeWordRight}
        >
          Right
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Practice;
