import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import CardSection from "../../components/card/cardSection/CardSection";
import { useQuery } from "@apollo/client";
import { GET_CARD } from "../../queries/cardQueries";

interface Props {}

const Card = ({}: Props) => {
  let { projectId, cardId } = useParams();

  const [card, setCard] = useState<Card>();

  const cardRes = useQuery(GET_CARD, {
    variables: { cardId },
  });

  useEffect(() => {
    setCard(cardRes?.data?.card);
  }, [cardRes]);

  return (
    <div className="wrapper">
      <TopNavigation>
        <ThemeButton
          link={`/projects/${projectId}/cards`}
          small
          color="theme-light"
          shadow
          icon
          style={{ marginRight: "auto" }}
        >
          <IoChevronBackOutline />
        </ThemeButton>
        <ThemeButton
          link={`/projects/${projectId}/card/${cardId}`}
          small
          color="theme-light"
          icon
          shadow
        >
          <HiOutlinePencil />
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="card-sections">
          {card && <CardSection section="title" card={card} show />}
          {card && <CardSection section="hint" card={card} show />}
          {card && <CardSection section="description" card={card} show />}
          {card && <CardSection section="answer" card={card} show />}
        </div>
      </div>
    </div>
  );
};

export default Card;
