interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const BottomNavigation = ({ children }: Props) => {
  return (
    <div className="wrapper-bottom">
      <div className="navigation-bottom">
        {Array.isArray(children) ? children?.map((child) => child) : children}
      </div>
    </div>
  );
};

export default BottomNavigation;
