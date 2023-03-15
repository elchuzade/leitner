interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const BottomNavigation = ({ children }: Props) => {
  return (
    <div className="wrapper-bottom">
      <div className="navigation-bottom">{children}</div>
    </div>
  );
};

export default BottomNavigation;
