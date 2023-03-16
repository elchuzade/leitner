import { Link } from "react-router-dom";

interface Props {
  project: any;
}

const ProjectItem = ({ project }: Props) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-item">
      <div
        className="project-item-progress"
        style={{ width: `${100 / project.cards.length}%` }}
      />
      <div className="project-item-title">{project.title}</div>
      <div className="project-item-cardscount">{project.cards.length}</div>
    </Link>
  );
};

export default ProjectItem;
