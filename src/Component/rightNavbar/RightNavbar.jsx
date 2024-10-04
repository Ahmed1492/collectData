import React from "react";
import "./rightNavbar.css";
import icone01 from "../../images/icone01.jpg";
import icone02 from "../../images/icone02.jpg";
export const RightNavbar = () => {
  return (
    <div className="rightnavbar">
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
