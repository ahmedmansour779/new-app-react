import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Overview from "./design-system/components/Overview";


function App() {
  return (
    <div>
      <Overview icon={faUserGroup} title={"650 participants"}>
        {`"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quis qui 
        alias incidunt excepturi amet quisquam odit laboriosam doloribus veritatis. Dolorem ut 
        optio vero architecto magnam delectus odit laudantium autem."`}
      </Overview>
    </div>
  );
}

export default App;
