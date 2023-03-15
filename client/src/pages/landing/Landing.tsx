import React from "react";
import { LeitnerLogo } from "../../components/leitnerLogo/LeitnerLogo";
import BottomNavigation from "../../components/bottomNavigation/BottomNavigation";
import Signature from "../../components/signature/Signature";

const Landing = () => {
  return (
    <div className="wrapper">
      <div className="landing">
        <LeitnerLogo />
        <Signature />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Landing;
