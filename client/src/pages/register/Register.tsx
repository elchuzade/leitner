import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

const Register = () => {
  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation logo backLink="/" />
      <div className="register">
        <ThemeTitle title="Register" />
        <ThemeInput
          onChange={() => {}}
          type="name"
          placeholder="name"
          color="theme-white"
          shadow
          fill
          style={{ marginBottom: "16px" }}
        />
        <ThemeInput
          onChange={() => {}}
          type="email"
          placeholder="email"
          color="theme-white"
          shadow
          fill
          style={{ marginBottom: "16px" }}
        />
        <ThemeInput
          onChange={() => {}}
          type="password"
          placeholder="password"
          color="theme-white"
          shadow
          fill
          style={{ marginBottom: "16px" }}
        />
      </div>
      <BottomNavigation>
        <ThemeButton
          onClick={() => {}}
          text="Register"
          color="theme-blue"
          shadow
          fill
        />
      </BottomNavigation>
    </div>
  );
};

export default Register;
