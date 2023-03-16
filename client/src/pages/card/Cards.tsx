import { useState } from "react";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import CardItem from "../../components/card/cardItem/CardItem";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";

type ShowCards = [boolean, boolean, boolean, boolean, boolean, boolean];

interface Props {}

const Cards = ({}: Props) => {
  const [searchCardText, setSearchCardText] = useState<string>("");
  const [cards, setCards] = useState<any[]>([
    {
      id: 1,
      title: "title",
      description: "description",
      stage: "1",
      hint: "hint",
      answer: "answer",
    },
    {
      id: 2,
      title: "title 2",
      description: "description 2",
      stage: "1",
      hint: "hint 2",
      answer: "answer 2",
    },
    {
      id: 3,
      title: "title 3",
      description: "description 3",
      stage: "2",
      hint: "hint 3",
      answer: "answer 3",
    },
  ]);
  const [showCards, setShowCards] = useState<ShowCards>([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const FlipShowStageCards = (stage: number) => {
    let modifiedShowCards: ShowCards = [...showCards];
    modifiedShowCards[stage - 1] = !modifiedShowCards[stage - 1];
    setShowCards(modifiedShowCards);
  };

  const RenderCardsStage = (stage: number) => {
    const filteredCards: any[] = cards.filter((c) => c.stage === `${stage}`);
    return (
      <div className="cards-stage">
        <div className="cards-stage-header">
          <ThemeTitle
            style={{
              fontSize: "20px",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            Stage {stage}
          </ThemeTitle>
          {filteredCards.length > 0 && (
            <>
              {" "}
              <div
                style={{
                  color: "grey",
                  width: "120px",
                  textAlign: "right",
                  marginRight: "8px",
                }}
              >
                {filteredCards.length}{" "}
                {filteredCards.length === 1 ? "card" : "cards"}
              </div>
              <ThemeButton
                shadow
                small
                icon
                color="theme-light"
                onClick={() => FlipShowStageCards(stage)}
              >
                {showCards[stage - 1] ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </ThemeButton>
            </>
          )}
        </div>
        {showCards[stage - 1] && filteredCards.length > 0 && (
          <div className="cards-stage-cards">
            {filteredCards.map((card) => (
              <CardItem key={card.id} project={{ id: "123" }} card={card} />
            ))}
          </div>
        )}
      </div>
    );
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
        <ThemeButton link="/projects/123/card" small color="theme-green" shadow>
          + Add Card
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="cards">
          <div className="cards-search">
            <ThemeTitle tail={cards.length}>Project Cards</ThemeTitle>
            <ThemeInput
              value={searchCardText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchCardText(e.target.value)
              }
              type="cards"
              placeholder="search cards"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
          </div>
          <div className="cards-stages">{RenderCardsStage(1)}</div>
          <div className="cards-stages">{RenderCardsStage(2)}</div>
          <div className="cards-stages">{RenderCardsStage(3)}</div>
          <div className="cards-stages">{RenderCardsStage(4)}</div>
          <div className="cards-stages">{RenderCardsStage(5)}</div>
          <div className="cards-stages">{RenderCardsStage(6)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
