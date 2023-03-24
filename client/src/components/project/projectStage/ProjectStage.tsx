interface Props {
  stage: 1 | 2 | 3 | 4 | 5 | 6;
  selected?: boolean;
  cardsCount: number;
  onClick?: () => void;
}

const ProjectStage = ({ stage, selected, cardsCount, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`project-stage project-stage-shadow project-stage-light ${
        stage === 5 ? "project-stage-yellow" : ""
      } ${stage === 6 ? "project-stage-green" : ""} ${
        selected ? "project-stage-selected" : ""
      }`}
    >
      <div className="project-stage-title">{stage}</div>
      <div className="project-stage-cardscount">{cardsCount}</div>
    </div>
  );
};

export default ProjectStage;
