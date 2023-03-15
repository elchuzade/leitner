interface Props extends BoxProps {
  title: string;
  textAlign?: "left" | "center" | "right";
}

const ThemeTitle = ({ title, textAlign = "left" }: Props) => {
  return (
    <h3 className="title" style={{ textAlign: textAlign }}>
      {title}
    </h3>
  );
};

export default ThemeTitle;
