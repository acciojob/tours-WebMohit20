import React, { useState } from "react";

import api from "./Api";
import TourList from "./TourList";

const App = () => {
  let [data,setData] = useState(api)
  // console.log(data);
  
    return(
      <main id="main">
        <TourList data={data} />
      </main>
    )
}
export default App;
