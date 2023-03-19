import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import ThemeTextarea from "../../components/theme/themeTextarea/ThemeTextarea";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_PROJECT } from "../../queries/projectQueries";
import { UPDATE_PROJECT } from "../../mutations/projectMutations";

interface Props {}

const NewProject = ({}: Props) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [getProjectRes, projectRes] = useLazyQuery(GET_PROJECT, {
    variables: { projectId },
  });

  const [updateProject, updateProjectRes] = useMutation(UPDATE_PROJECT, {
    variables: { projectId, title, description },
  });

  useEffect(() => {
    // If projectId exists then it is edit project so fetch the project, else it is add project
    if (projectId) {
      getProjectRes();
    }
  }, []);

  useEffect(() => {
    setTitle(projectRes?.data?.project?.title || "");
    setDescription(projectRes?.data?.project?.description || "");
  }, [projectRes]);

  useEffect(() => {
    if (updateProjectRes?.data?.updateProject) {
      navigate(`/projects/${projectId}`);
    }
  }, [updateProjectRes]);

  const onSaveProject = () => {
    if (title && description) {
      updateProject();
    }
  };

  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <ThemeButton
          link="/me"
          small
          color="theme-light"
          shadow
          icon
          style={{ marginRight: "auto" }}
        >
          <IoChevronBackOutline />
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="project">
          <div className="project-new">
            <ThemeTitle>{projectId ? "Edit" : "Add"} Project</ThemeTitle>
            <ThemeInput
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              type="title"
              placeholder="title"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
            <ThemeTextarea
              value={description}
              rows={6}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
              placeholder="description"
              color="theme-white"
              shadow
              fill
              style={{ marginBottom: "16px" }}
            />
          </div>
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton onClick={onSaveProject} color="theme-blue" shadow fill>
          Save
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default NewProject;
