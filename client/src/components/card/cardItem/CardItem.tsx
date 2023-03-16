import { Link } from "react-router-dom";

interface Props {
  project: any;
  card: any;
}

const CardItem = ({ project, card }: Props) => {
  return (
    <Link to={`/projects/${project.id}/cards/${card.id}`} className="card-item">
      <div className="card-item-title">{card.title}</div>
      <div className="card-item-stage">stage {card.stage}</div>
    </Link>
  );
};

export default CardItem;
