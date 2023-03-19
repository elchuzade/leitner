import { useState, useEffect } from "react";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import ProjectItem from "../../components/project/projectItem/ProjectItem";
import { GET_PROFILE } from "../../queries/profileQueries";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { useQuery } from "@apollo/client";

interface Props {}

const Profile = ({}: Props) => {
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("https://picsum.photos/200");
  const [projects, setProjects] = useState<Project[]>([]);

  const profileRes = useQuery(GET_PROFILE);
  const projectsRes = useQuery(GET_PROJECTS);

  useEffect(() => {
    setName(profileRes?.data?.profile?.name || "");
  }, [profileRes]);

  useEffect(() => {
    setProjects(projectsRes?.data?.projects || []);
  }, [projectsRes]);

  return (
    <div className="wrapper">
      <div className="profile">
        <div className="profile-header">
          <img src={avatar} alt="avatar" className="profile-img" />
          <p>{name}</p>
        </div>
        <ThemeTitle
          tail={
            <ThemeButton
              link="/project"
              color="theme-transparent"
              style={{ padding: "12px 0px" }}
            >
              + Add Project
            </ThemeButton>
          }
        >
          Projects
        </ThemeTitle>
        <div className="profile-projects">
          {projects?.map((project: Project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
