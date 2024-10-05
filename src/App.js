import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./page/homePage/HomePage";
import { StrudentData } from "./Component/strudentData/StrudentData";

function App() {

  // For Deployment
  // "homepage": "https://ahmed1492.github.io/collectData",

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/data" element={<StrudentData />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
