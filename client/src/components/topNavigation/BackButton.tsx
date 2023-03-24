import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";

interface Props {}

const BackButton = ({}: Props) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ThemeButton
      onClick={goBack}
      small
      color="theme-light"
      shadow
      icon
      style={{ marginRight: "auto" }}
    >
      <IoChevronBackOutline />
    </ThemeButton>
  );
};

export default BackButton;
