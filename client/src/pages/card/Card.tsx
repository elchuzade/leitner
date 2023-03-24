import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import CardSection from "../../components/card/cardSection/CardSection";
import { useQuery } from "@apollo/client";
import { GET_CARD } from "../../queries/cardQueries";
import BackButton from "../../components/topNavigation/BackButton";

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
        <BackButton />
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
