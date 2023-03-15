import ThemeButton from "../../components/themeButton/ThemeButton";
import ThemeInput from "../../components/themeInput/ThemeInput";
import TopNavigation from "../../components/topNavigation/TopNavigation";

const Landing = () => {
  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation logo />
      <div className="login">
        <ThemeInput
          onChange={() => {}}
          type="email"
          placeholder="email"
          // outline
          color="theme-white"
          shadow
          fill
          style={{ marginBottom: "16px" }}
        />
        <ThemeInput
          onChange={() => {}}
          type="password"
          placeholder="password"
          // outline
          color="theme-white"
          shadow
          fill
          style={{ marginBottom: "16px" }}
        />
        <ThemeButton
          onClick={() => {}}
          text="Login"
          // outline
          color="theme-blue"
          shadow
          fill
        />
      </div>
    </div>
  );
};

export default Landing;
