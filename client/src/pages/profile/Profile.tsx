import { useState } from "react";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import ProjectItem from "../../components/project/projectItem/ProjectItem";

interface Props {}

const Profile = ({}: Props) => {
  const [name, setName] = useState("Kamran Elchuzade");
  const [avatar, setAvatar] = useState("https://picsum.photos/200");
  const [projects, setProjects] = useState<any>([
    { id: 1, title: "German Language A1", cards: [1, 2, 3, 4, 5, 6] },
    { id: 2, title: "German Language A2", cards: [1, 2, 3] },
  ]);

  return (
    <div className="wrapper">
      <div className="profile">
        <div className="profile-header">
          <img src={avatar} alt="avatar" className="profile-img" />
          <p className="profile-title">{name}</p>
        </div>
        <div className="profile-title">
          <ThemeTitle title="Projects" />
          <ThemeButton
            link="/project"
            text={"+ Add New"}
            color="theme-transparent"
            style={{ width: "120px", padding: "12px 0px" }}
          />
        </div>
        <div className="profile-projects">
          {projects.map((project: any) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
