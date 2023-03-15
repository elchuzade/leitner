interface Props extends BoxProps {
  children: React.ReactNode | React.ReactNode[];
  textAlign?: "left" | "center" | "right";
}

const ThemeTitle = ({ children, textAlign = "left" }: Props) => {
  return (
    <h3 className="title" style={{ textAlign: textAlign }}>
      {children}
    </h3>
  );
};

export default ThemeTitle;
