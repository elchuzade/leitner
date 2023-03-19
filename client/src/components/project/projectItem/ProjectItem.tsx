import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_CARDS } from "../../../queries/cardQueries";
import { useQuery } from "@apollo/client";

interface Props {
  project: any;
}

const ProjectItem = ({ project }: Props) => {
  const [cards, setCards] = useState<Card[]>([]);

  const cardsRes = useQuery(GET_CARDS, {
    variables: { projectId: project.id },
  });

  useEffect(() => {
    setCards(cardsRes?.data?.cards);
  }, [cardsRes]);

  return (
    <Link to={`/projects/${project?.id}`} className="project-item">
      <div
        className="project-item-progress"
        style={{
          width: `${
            cards?.filter((c) => c.stage === "5").length / cards?.length
          }%`,
        }}
      />
      <div className="project-item-title">{project?.title}</div>
      <div className="project-item-cardscount">{cards?.length}</div>
    </Link>
  );
};

export default ProjectItem;
