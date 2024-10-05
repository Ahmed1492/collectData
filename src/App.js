import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/homePage/HomePage";
import { StrudentData } from "./Component/strudentData/StrudentData";
import { useState } from "react";

function App() {
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

  // "homepage": "https://ahmed1492.github.io/collectData",

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          
          <Route path="/" element={<HomePage formData={formData} setFormData={setFormData} />} />
          
          <Route path="/data" element={<StrudentData formData={formData} setFormData={setFormData} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
