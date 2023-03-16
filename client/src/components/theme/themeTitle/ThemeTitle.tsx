interface Props extends BoxProps {
  children: React.ReactNode | React.ReactNode[];
  textAlign?: "left" | "center" | "right";
  tail?: React.ReactNode;
  style?: React.CSSProperties;
}

const ThemeTitle = ({ children, textAlign = "left", tail, style }: Props) => {
  return (
    <h3 className="title" style={{ textAlign: textAlign, ...style }}>
      {children}
      <span style={{ float: "right" }}>{tail}</span>
    </h3>
  );
};

export default ThemeTitle;
