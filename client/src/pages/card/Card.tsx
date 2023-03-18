import { useState, useEffect } from "react";
import { useParams } from "react-router";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import { IoChevronBackOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi";
import CardSection from "../../components/card/cardSection/CardSection";

interface Props {}

const Card = ({}: Props) => {
  let { id, cardId } = useParams();

  const [card, setCard] = useState<any>({
    title: "Parkieren",
    hint: "For cards",
    description: "When you stop the car somewhere, the action that you perfom",
    answer: "To park",
  });

  useEffect(() => {
    console.log(id, cardId);
  }, [id, cardId]);

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
        <div className="card-sections">
          <CardSection section="title" card={card} />
          <CardSection section="hint" card={card} />
          <CardSection section="description" card={card} />
          <CardSection section="answer" card={card} />
        </div>
      </div>
    </div>
  );
};

export default Card;
