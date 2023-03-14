import React from "react";
import ThemeButton from "../themeButton/ThemeButton";

const BottomNavigation = () => {
  return (
    <div className="wrapper-bottom">
      <div className="navigation-bottom">
        <ThemeButton text="Login" outline color="theme-white" shadow />
        <ThemeButton text="Register" color="theme-blue" shadow />
      </div>
    </div>
  );
};

export default BottomNavigation;
