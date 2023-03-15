import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { LeitnerIcon } from "../../components/leitnerIcon/LeitnerIcon";

const Login = () => {
  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <ThemeButton
          link="/"
          small
          color="theme-light"
          shadow
          style={{ marginRight: "auto" }}
        >
          {"<"}
        </ThemeButton>
        <ThemeButton link="/" style={{ padding: 0 }}>
          <LeitnerIcon width={32} height={40} />
        </ThemeButton>
      </TopNavigation>
      <div className="login">
        <ThemeTitle>Login</ThemeTitle>
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
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Login
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Login;
