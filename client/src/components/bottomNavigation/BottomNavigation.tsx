import ThemeButton from "../themeButton/ThemeButton";

const BottomNavigation = () => {
  return (
    <div className="wrapper-bottom">
      <div className="navigation-bottom">
        <ThemeButton
          link="/login"
          text="Login"
          outline
          color="theme-white"
          shadow
          fill
          style={{ marginRight: "8px" }}
        />
        <ThemeButton
          link="/register"
          text="Register"
          color="theme-blue"
          shadow
          fill
          style={{ marginLeft: "8px" }}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
