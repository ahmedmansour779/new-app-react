import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/components/main.css";
import CountactUs from "./design-system/components/pages/Home/components/CountactUs/CountactUs";
import CreativSpeakersComponent from "./design-system/components/pages/Home/components/Creative Speakers/CreativSpeakers";
import NavBar from "./design-system/components/pages/Home/components/NavBar";
import OverView from "./design-system/components/pages/Home/components/NavbarHome/OverView";
import OurPrograms from "./design-system/components/pages/Home/components/Our programs";
import OurSponsorsHome from "./design-system/components/pages/Home/components/Our Sponsors/OurSponsorsHome";
import Register from "./design-system/components/pages/Home/components/Register";
import Venue from "./design-system/components/pages/Home/components/venue/Venue";
import Home from "./design-system/components/pages/Home/Home";
import Scroll from "./design-system/components/scroll to top/Scroll";

function App() {

  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/overView" element={<><NavBar /><OverView /></>} />
            <Route path="/speakers" element={<><NavBar /><CreativSpeakersComponent /></>} />
            <Route path="/programs" element={<><NavBar /><OurPrograms /></>} />
            <Route path="/register" element={<><NavBar /><Register /></>} />
            <Route path="/venue" element={<><NavBar /><Venue /></>} />
            <Route path="/sponsers" element={<><NavBar /><OurSponsorsHome /></>} />
            <Route path="/contact" element={<><NavBar /><CountactUs /></>} />
          </Routes>
        </BrowserRouter>
      </>
      <Scroll />
    </>
  );
}

export default App;