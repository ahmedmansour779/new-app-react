import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/components/main.css";
import Oursponsours from "./design-system/components/OurSponsours/Oursponsours";
import ourSponsorsData from "./design-system/components/OurSponsours/OurSponsoursData";
import Home from "./design-system/components/pages/Home/Home";

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
      {/* <>
        {OurProgramData.map(item => {
          return (
            <OurPrograms
              imag={item.imag}
              alt={item.al}
              title={item.title}
              time={item.time}
              name={item.name}
              roomNumper={item.roomNumper}
              description={item.description}
              key={item.id} />
          )
        })}
      </> */}
      <>
        <div style={{ display: "flex", gap: "1rem" }}>
          {ourSponsorsData.map(item => {
            return (
              <Oursponsours src={item.src} alt={item.alt} key={item.id} />
            )
          })}
        </div>
      </>
    </>
  );
}

export default App;