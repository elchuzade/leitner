interface Props extends BoxProps {
  title: string;
}

const ThemeTitle = ({ title }: Props) => {
  return <h3 className="title">{title}</h3>;
};

export default ThemeTitle;
