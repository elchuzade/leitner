import { LeitnerLogo } from "../../components/leitnerLogo/LeitnerLogo";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import Signature from "../../components/signature/Signature";

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="landing">
        <LeitnerLogo />
        <Signature />
        <BottomNavigation>
          <ThemeButton
            link="/login"
            color="theme-white"
            shadow
            fill
            style={{ marginRight: "8px" }}
          >
            Login
          </ThemeButton>
          <ThemeButton
            link="/register"
            color="theme-blue"
            shadow
            fill
            style={{ marginLeft: "8px" }}
          >
            Register
          </ThemeButton>
        </BottomNavigation>
      </div>
    </div>
  );
};

export default Landing;
