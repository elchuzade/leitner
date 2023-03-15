interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const TopNavigation = ({ children }: Props) => {
  return (
    <div className="wrapper-top">
      <div className="navigation-top">{children}</div>
    </div>
  );
};

export default TopNavigation;
