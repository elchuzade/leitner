import { useState } from "react";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import CardSection from "../../components/card/cardSection/CardSection";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

interface Props {}

const Practice = ({}: Props) => {
  const [card, setCard] = useState<any>({
    title: "Parkieren",
    hint: "For cards",
    description: "When you stop the car somewhere, the action that you perfom",
    answer: "To park",
  });
  const [showLevel, setShowLevel] = useState(0); // 0 - title, 1 - hint, 2 - description, 3 - answer

  const onClickCard = (section: string, index: number) => {
    console.log(section, index);
    setShowLevel(index);
  };

  return (
    <div className="wrapper">
      <TopNavigation>
        <ThemeButton
          link="/projects/123"
          small
          color="theme-light"
          shadow
          icon
          style={{ marginRight: "auto" }}
        >
          <IoChevronBackOutline />
        </ThemeButton>
        <ThemeButton
          link="/projects/123/card/12"
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
          {card.title && (
            <div onClick={() => onClickCard("title", 0)}>
              <CardSection
                section="title"
                card={card}
                hover
                show={showLevel >= 0}
              />
            </div>
          )}
          {card.hint && (
            <div onClick={() => onClickCard("hint", 1)}>
              <CardSection
                section="hint"
                card={card}
                hover
                show={showLevel >= 1}
              />
            </div>
          )}
          {card.description && (
            <div onClick={() => onClickCard("description", 2)}>
              <CardSection
                section="description"
                card={card}
                hover
                show={showLevel >= 2}
              />
            </div>
          )}
          {card.answer && (
            <div onClick={() => onClickCard("answer", 3)}>
              <CardSection
                section="answer"
                card={card}
                hover
                show={showLevel >= 3}
              />
            </div>
          )}
        </div>
        <div className="practice-button-section">
          <div className="practice-button-wrapper practice-button-wrapper-left">
            <button
              onClick={() => console.log("left")}
              className="practice-button"
            >
              <IoChevronBackOutline />
            </button>
          </div>
          <div className="practice-button-wrapper practice-button-wrapper-right">
            <button
              onClick={() => console.log("right")}
              className="practice-button"
            >
              <IoChevronForwardOutline />
            </button>
          </div>
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton
          color="theme-red"
          shadow
          fill
          style={{ marginRight: "8px" }}
        >
          Wrong
        </ThemeButton>
        <ThemeButton
          color="theme-green"
          shadow
          fill
          style={{ marginLeft: "8px" }}
        >
          Right
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Practice;
