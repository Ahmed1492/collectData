import React, { useState } from "react";
import "./rightNavbar.css";
import icone01 from "../../images/icone01.png";
import icone02 from "../../images/icone02.png";
import menue from "../../images/menu.png";

export const RightNavbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  return (
    <div className={`rightnavbar ${showNavBar ? "showNavbar" : "hideNavbar"}`}>
      <button onClick={() => setShowNavBar(!showNavBar)}>
        <img className="menue" src={menue} alt="" />
      </button>
      <div>
        <img src={icone01} alt="" />
        <a href="#link"> القائمه الرئيسيه</a>
      </div>
      <div>
        <img src={icone02} alt="" />
        <a href="#link"> الطلاب</a>
      </div>

      <div>
        <img src={icone02} alt="" />
        <a href="#link"> المعلمون</a>
      </div>

      <div>
        <img src={icone02} alt="" />
        <a href="#link"> الموظون</a>
      </div>
    </div>
  );
};
