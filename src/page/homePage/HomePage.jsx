import React from "react";
import "./homePage.css";
import { CreateNewAccount } from "../../Component/createNewAccount/CreateNewAccount";
import { StrudentData } from "../../Component/strudentData/StrudentData";
export const HomePage = ({ formData, setFormData }) => {
  return (
    <div className="spaceX spaceY ">
      <CreateNewAccount formData={formData} setFormData={setFormData} />
      {/* <StrudentData /> */}
    </div>
  );
};
