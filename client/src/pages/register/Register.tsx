import { useState } from "react";
import ThemeButton from "../../components/theme/themeButton/ThemeButton";
import ThemeInput from "../../components/theme/themeInput/ThemeInput";
import TopNavigation from "../../components/topNavigation/TopNavigation";
import ThemeTitle from "../../components/theme/themeTitle/ThemeTitle";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import { LeitnerIcon } from "../../components/leitnerIcon/LeitnerIcon";
import { IoChevronBackOutline } from "react-icons/io5";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="wrapper wrapper-flex">
      <TopNavigation>
        <ThemeButton
          link="/"
          small
          color="theme-light"
          shadow
          icon
          style={{ marginRight: "auto" }}
        >
          <IoChevronBackOutline />
        </ThemeButton>
        <ThemeButton link="/" style={{ padding: 0 }}>
          <LeitnerIcon width={32} height={40} />
        </ThemeButton>
      </TopNavigation>
      <div className="wrapper-top-navigation">
        <div className="register">
          <ThemeTitle>Register</ThemeTitle>
          <ThemeInput
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="name"
            placeholder="name"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
          <ThemeInput
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            type="email"
            placeholder="email"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
          <ThemeInput
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            placeholder="password"
            color="theme-white"
            shadow
            fill
            style={{ marginBottom: "16px" }}
          />
        </div>
      </div>
      <BottomNavigation>
        <ThemeButton onClick={() => {}} color="theme-blue" shadow fill>
          Register
        </ThemeButton>
      </BottomNavigation>
    </div>
  );
};

export default Register;
