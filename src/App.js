import React from "react";
import "./app.css";
import Overview from "./design-system/components/Overview";
import overviewData from "./design-system/components/Overview/Data";
import { UpOverviewWrapper } from "./design-system/components/Overview/Sryles";

function App() {
  return (
    <>
      <UpOverviewWrapper>
        {overviewData.map(item => {
          return (
            <Overview
              icon={item.icon}
              title={item.title}
              describtion={item.description}
              key={item.id} />
          )
        })}
      </UpOverviewWrapper>
    </>
  );
}

export default App;