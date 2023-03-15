import { useState } from "react";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ProjectStage from "../../components/project/projectStage/ProjectStage";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

interface Props {}

const Project = ({}: Props) => {
  const [projectTitle, setProjectTitle] = useState("German Language A1");
  const [projectInfo, setProjectInfo] = useState(
    "we iowie fiwjf wjief jwiej oiwjfhewh rehguirhweuighuiehguheg oihwei hief hwio"
  );

  return (
    <div className="wrapper">
      <TopNavigation>
        <ThemeButton
          link="/me"
          small
          color="theme-light"
          shadow
          style={{ marginRight: "auto" }}
        >
          {"<"}
        </ThemeButton>
        <ThemeButton link="/projects/123/card" small color="theme-green" shadow>
          + Add Card
        </ThemeButton>
      </TopNavigation>
      <div className="project">
        <div className="project-stages">
          <ProjectStage stage={1} cardsCount={15} />
          <ProjectStage stage={2} cardsCount={15} />
          <ProjectStage stage={3} cardsCount={15} />
          <ProjectStage stage={4} cardsCount={15} />
          <ProjectStage stage={5} cardsCount={15} />
          <ProjectStage stage={6} cardsCount={15} />
        </div>
        <div className="project-info">
          <div className="project-info-title">{projectTitle}</div>
          <div className="project-info-description">{projectInfo}</div>
          <div className="project-info-footer">
            <ThemeButton
              small
              color="theme-dark"
              style={{ marginRight: "8px" }}
            >
              Edit
            </ThemeButton>
            <ThemeButton small color="theme-dark">
              Delete
            </ThemeButton>
          </div>
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Practice
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Project;
