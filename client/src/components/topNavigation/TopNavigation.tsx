import { LeitnerIcon } from "../leitnerIcon/LeitnerIcon";
import ThemeButton from "../themeButton/ThemeButton";

interface Props {
  icon?: boolean;
  logo?: boolean;
}

const BottomNavigation = ({}: Props) => {
  return (
    <div className="wrapper-top">
      <div className="navigation-top">
        <ThemeButton
          link="/"
          style={{ padding: 0 }}
          text={<LeitnerIcon width={32} height={40} />}
        />
      </div>
    </div>
  );
};

export default BottomNavigation;
