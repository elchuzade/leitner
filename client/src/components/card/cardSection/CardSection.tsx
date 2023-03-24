interface Props {
  section: string;
  card: any;
  hover?: boolean;
  show?: boolean;
}

const CardSection = ({ section, card, hover, show }: Props) => {
  return (
    <div className={`card-section ${hover ? "card-section-hover" : ""}`}>
      <div className="card-section-title">{section.toUpperCase()}</div>
      {show && <div className="card-section-content">{card[section]}</div>}
    </div>
  );
};

export default CardSection;
