import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ProjectStage from "../../components/project/projectStage/ProjectStage";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { GET_CARDS } from "../../queries/cardQueries";
import { GET_PROJECT } from "../../queries/projectQueries";
import { useQuery } from "@apollo/client";
import { filterCards } from "../../utils/cardsUtils";
import BackButton from "../../components/topNavigation/BackButton";

interface Props {}

const Project = ({}: Props) => {
  let { projectId } = useParams();

  const [stage, setStage] = useState<Number>(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const projectRes = useQuery(GET_PROJECT, {
    variables: { projectId },
  });
  const cardsRes = useQuery(GET_CARDS, {
    variables: { projectId },
  });

  useEffect(() => {
    setTitle(projectRes?.data?.project?.title || "");
    setDescription(projectRes?.data?.project?.description || "");
  }, [projectRes]);

  useEffect(() => {
    setCards(cardsRes?.data?.cards);
  }, [cardsRes]);

  return (
    <div className="wrapper">
      <TopNavigation>
        <BackButton />
        <ThemeButton
          link={`/projects/${projectId}/cards`}
          small
          color="theme-green"
          shadow
        >
          Show All Cards
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="project">
          <div className="project-stages">
            <ProjectStage
              onClick={() => setStage(1)}
              selected={stage === 1}
              stage={1}
              cardsCount={filterCards(cards, 1)?.length}
            />
            <ProjectStage
              onClick={() => setStage(2)}
              selected={stage === 2}
              stage={2}
              cardsCount={filterCards(cards, 2)?.length}
            />
            <ProjectStage
              onClick={() => setStage(3)}
              selected={stage === 3}
              stage={3}
              cardsCount={filterCards(cards, 3)?.length}
            />
            <ProjectStage
              onClick={() => setStage(4)}
              selected={stage === 4}
              stage={4}
              cardsCount={filterCards(cards, 4)?.length}
            />
            <ProjectStage
              onClick={() => setStage(5)}
              selected={stage === 5}
              stage={5}
              cardsCount={filterCards(cards, 5)?.length}
            />
            <ProjectStage
              onClick={() => setStage(6)}
              selected={stage === 6}
              stage={6}
              cardsCount={filterCards(cards, 6)?.length}
            />
          </div>
          <div className="project-info">
            <div className="project-info-title">{title}</div>
            <div className="project-info-description">{description}</div>
            <div className="project-info-footer">
              <ThemeButton
                link={`/project/${projectId}`}
                small
                color="theme-dark"
                style={{ marginRight: "8px" }}
              >
                Edit
              </ThemeButton>
              <ThemeButton small color="theme-red">
                Delete
              </ThemeButton>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton
          disabled={stage === 0}
          link={`/projects/${projectId}/practice/${stage}`}
          color="theme-blue"
          shadow
          fill
        >
          {stage === 0 ? "Select a Stage Above" : `Practice stage ${stage}`}
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Project;
