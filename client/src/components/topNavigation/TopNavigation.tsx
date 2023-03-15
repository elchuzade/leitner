import { LeitnerIcon } from "../leitnerIcon/LeitnerIcon";
import ThemeButton from "../theme/themeButton/ThemeButton";

interface Props {
  icon?: boolean;
  logo?: boolean;
  backLink: string;
}

const TopNavigation = ({ backLink }: Props) => {
  return (
    <div className="wrapper-top">
      <div className="navigation-top">
        <ThemeButton
          link={backLink}
          small
          text="<"
          color="theme-light"
          shadow
          style={{ marginRight: "auto" }}
        />
        <ThemeButton
          link="/"
          style={{ padding: 0 }}
          text={<LeitnerIcon width={32} height={40} />}
        />
      </div>
    </div>
  );
};

export default TopNavigation;
