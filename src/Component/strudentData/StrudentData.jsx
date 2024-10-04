import React, { useEffect, useState } from "react";
import "./strudentData.css";
import { RightNavbar } from "../rightNavbar/RightNavbar";
import axios from "axios";

export const StrudentData = () => {
  const [currentUserData, setCurrentUserData] = useState({});
  let isChangedData;
  const GetData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/c/7dbb-12af-40b1-9312"
      );
      const dataLength = await response?.data?.length;
      const randomIndex = Math?.floor(Math.random() * dataLength);
      setCurrentUserData(response?.data[randomIndex]);
      isChangedData = !isChangedData;
      // console.log(response.data[randomIndex].attendanceCurrentLevel[1]);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      throw new Error("Failed to fetch data");
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="darkBackground">
      <div className="spaceX spaceY">
        <div className="flex">
          <RightNavbar />
          <div className="student-details">
            {/* Pass the current user data to StudentInfo */}
            <StudentInfo userData={currentUserData} />
            <GroupInfo userData={currentUserData} />
            <CurrentLevel userData={currentUserData} />
            <AttendanceRecords userData={currentUserData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StudentInfo = ({ userData }) => {
  return (
    <div className="student-info w-full">
      <div className="section w-half flex">
        <div className="image"></div>
        <div className="info">
          <p>اسم الطالب: {userData.studentName || "N/A"}</p>
          <p>كود الطالب: {userData.studentCode || "N/A"}</p>
          <p>تاريخ الميلاد: {userData.dateOfBirth || "N/A"}</p>
          <p>السن: {userData.age || "N/A"}</p>
        </div>
      </div>
      <div className="section w-half">
        <p>العنوان: {userData.address || "N/A"}</p>
        <p>حالة الطالب: {userData.studentStatus || "N/A"}</p>
        <p>رقم هاتف ولي الأمر: {userData.parentPhone || "N/A"}</p>
        <p>تاريخ الالتحاق بالمدرسة: {userData.schoolJoiningDate || "N/A"}</p>
      </div>
    </div>
  );
};

const GroupInfo = ({ userData }) => {
  return (
    <div className="group-info">
      <div className="flex w-full">
        <p>المجموعة: {userData?.group?.name || "N/A"}</p>
        <p>اسم المعلم: {userData?.teacher || "N/A"}</p>
        <p>موعد الدفعة: {userData?.sessionTime || "N/A"}</p>
      </div>
      <div className="flex wrap w-half">
        <p>الاشتراك: {userData?.group?.subscription || "N/A"}</p>
        <p>الكرسي: {userData?.chair || "N/A"}</p>
      </div>
    </div>
  );
};

const CurrentLevel = ({ userData }) => (
  <div className="currentLevel">
    <p>المستوي الحالي:{userData?.currentLevel}</p>
    <a href="#test" className="prevLevels">
      عرض المستويات السابقه
    </a>
  </div>
);

const AttendanceRecords = ({ userData }) => {
  return (
    <div className="attendanceRecords">
      {/*  Attendance Header */}
      <div className="attendance">
        <p>غياب المستوي الحال</p>
        <a href="er" className="prevLevels">
          عرض المستويات السابقه
        </a>
      </div>
      {/* Attendance Body */}
      {userData?.attendanceCurrentLevel?.map((singleUser, index) => (
        <div key={index} className="attendance">
          <p>{singleUser?.date}</p>
          <div className="flex">
            <Checkbox userData={singleUser?.attenance} label="الحضور" />
            <Checkbox userData={singleUser?.classStudy} label="الحفظ" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Checkbox = ({ label, userData }) => (
  <div className="flex">
    <p>{label}</p>
    <div
      className={`checkboxAttend  ${userData ? "attend" : ""}`}
    ></div>
  </div>
);
