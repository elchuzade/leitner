import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import ThemeTextarea from "../../components/theme/themeTextarea/ThemeTextarea";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";

interface Props {}

const AddNewProject = ({}: Props) => {
  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation logo backLink="/me" />
      <div className="project">
        <div className="project-new">
          <ThemeTitle title="Add Project" />
          <ThemeInput
            onChange={() => {}}
            type="title"
            placeholder="title"
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
            style={{ marginBottom: "16px" }}
          />
        </div>
      </div>
      <BottomNavigation
        children={[
          <ThemeButton
            onClick={() => {}}
            text="Save"
            color="theme-blue"
            shadow
            fill
          />,
        ]}
      />
    </div>
  );
};

export default AddNewProject;
