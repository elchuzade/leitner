import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import ThemeTextarea from "../../components/theme/themeTextarea/ThemeTextarea";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

interface Props {}

const NewCard = ({}: Props) => {
  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <ThemeButton
          link="/projects/123"
          small
          color="theme-light"
          shadow
          style={{ marginRight: "auto" }}
        >
          {"<"}
        </ThemeButton>
      </TopNavigation>
      <div className="card">
        <div className="card-new">
          <ThemeTitle>Add Card</ThemeTitle>
          <ThemeInput
            onChange={() => {}}
            type="title"
            placeholder="title"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
          <ThemeInput
            onChange={() => {}}
            type="hint"
            placeholder="hint"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
          <ThemeTextarea
            rows={6}
            onChange={() => {}}
            placeholder="description"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "12px" }}
          />
          <ThemeInput
            onChange={() => {}}
            type="answer"
            placeholder="answer"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Save
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default NewCard;
