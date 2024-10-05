import React, { useState } from "react";
import "./createNewAccount.css";
import { RightNavbar } from "../rightNavbar/RightNavbar";
import icone03 from "../../images/icone03.png";

export const CreateNewAccount = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    joinSchoolDate: "",
    hisOffice: "",
    address: "",
    dayOfBirth: "",
    monthOfBirth: "",
    yearOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  // Validation Functions
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateField = (id, value) => {
    let errorMsg = "";

    if (!value && id !== "joinSchoolDate") {
      errorMsg = `Please fill in the ${id}`;
    } else if (id === "password" && !validatePassword(value)) {
      errorMsg =
        "Password must contain at least 8 characters, Contain at least one uppercase and one lowercase letter.";
    } else if (id === "confirmPassword" && value !== formData.password) {
      errorMsg = "Passwords do not match";
    }
    return errorMsg;
  };

  // Real-time validation in handleChange
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    const error = validateField(id, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate all fields on form submission
    for (let [key, value] of Object.entries(formData)) {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      console.log("Validated Data:", formData);
    }
  };

  return (
    <div className="createNewUswerPage">
      <RightNavbar />

      <div className="myform">
        <div className="header">
          <h1>انشاء حساب جديد</h1>

          <img src={icone03} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          {/* name & date Of Join To School */}
          <div className="flex">
            {/* Name Input */}
            <div className="nameInput w-half">
              <label htmlFor="name">الاسم</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            {/* join School Date Input */}
            <div className="joinSchoolDate w-half">
              <label htmlFor="joinSchoolDate">موعد الالتحاق بالمدرسه</label>
              <input
                id="joinSchoolDate"
                type="date"
                value={formData.joinSchoolDate}
                onChange={handleChange}
              />
              {/* {errors.joinSchoolDate && (
                <p className="error">{errors.joinSchoolDate}</p>
              )} */}
            </div>
          </div>

          {/* HisOffice & Address */}
          <div className="flex">
            {/* His Office */}
            <div className="hisOffice w-half">
              <label htmlFor="hisOffice">المكتب التابع ليه</label>
              <input
                id="hisOffice"
                type="text"
                value={formData.hisOffice}
                onChange={handleChange}
              />
              {errors.hisOffice && <p className="error">{errors.hisOffice}</p>}
            </div>
            {/* His Address */}
            <div className="address w-half">
              <label htmlFor="address">العنوان</label>
              <input
                id="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error">{errors.address}</p>}
            </div>
          </div>

          {/* Date Of Birth */}
          <label className="birthday" htmlFor="birthday">
            تاريخ الميلاد
          </label>
          <div className="flex dateOfBirth">
            <div className="dayOfBirth w-third">
              <input
                placeholder="يوم"
                id="dayOfBirth"
                type="text"
                value={formData.dayOfBirth}
                onChange={handleChange}
              />
              {errors.dayOfBirth && (
                <p className="error">{errors.dayOfBirth}</p>
              )}
            </div>
            <div className="monthOfBirth w-third">
              <input
                placeholder="شهر"
                id="monthOfBirth"
                type="text"
                value={formData.monthOfBirth}
                onChange={handleChange}
              />
              {errors.monthOfBirth && (
                <p className="error">{errors.monthOfBirth}</p>
              )}
            </div>
            <div className="yearOfBirth w-third">
              <input
                placeholder="سنه"
                id="yearOfBirth"
                type="text"
                value={formData.yearOfBirth}
                onChange={handleChange}
              />
              {errors.yearOfBirth && (
                <p className="error">{errors.yearOfBirth}</p>
              )}
            </div>
          </div>

          {/* Passwords & Confirm Password */}
          <div className="flex">
            <div className="password w-half">
              <label htmlFor="password">كلمه السر</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="confirmPassword w-half">
              <label htmlFor="confirmPassword">تأكيد كلمه السر</label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="submitForm">
            <button type="submit">الدخول</button>
          </div>
        </form>
      </div>
    </div>
  );
};
