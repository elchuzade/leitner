interface Props {
  stage: 1 | 2 | 3 | 4 | 5 | 6;
  cardsCount: number;
}

const ProjectStage = ({ stage, cardsCount }: Props) => {
  return (
    <div
      className={`project-stage project-stage-shadow project-stage-light ${
        stage === 5 ? "project-stage-yellow" : ""
      } ${stage === 6 ? "project-stage-green" : ""}`}
    >
      <div className="project-stage-title">{stage}</div>
      <div className="project-stage-cardscount">{cardsCount}</div>
    </div>
  );
};

export default ProjectStage;
