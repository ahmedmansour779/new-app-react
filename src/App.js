import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/components/main.css";
import Oursponsours from "./design-system/components/OurSponsours/Oursponsours";
import ourSponsorsData from "./design-system/components/OurSponsours/OurSponsoursData";
import Home from "./design-system/components/pages/Home/Home";
import Scroll from "./design-system/components/scroll to top/Scroll";

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </>
      <>
        <div style={{ display: "flex", gap: "1rem" }}>
          {ourSponsorsData.map(item => {
            return (
              <Oursponsours src={item.src} alt={item.alt} key={item.id} />
            )
          })}
        </div>
      </>
      <Scroll />
    </>
  );
}

export default App;