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
        <BottomNavigation
          children={[
            <ThemeButton
              link="/login"
              text="Login"
              outline
              color="theme-white"
              shadow
              fill
              style={{ marginRight: "8px" }}
            />,
            <ThemeButton
              link="/register"
              text="Register"
              color="theme-blue"
              shadow
              fill
              style={{ marginLeft: "8px" }}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Landing;
