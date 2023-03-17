import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./design-system/components/main.css";
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
      <Scroll />
    </>
  );
}

export default App;