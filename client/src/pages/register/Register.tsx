import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { LeitnerIcon } from "../../components/leitnerIcon/LeitnerIcon";

const Register = () => {
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
      <div className="register">
        <ThemeTitle>Register</ThemeTitle>
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
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Register
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Register;
