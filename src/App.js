import React from "react";
import Header from "./components/header";
import Locations from "./components/locations";
import locationsData from "./data";

function App() {

  let locationsComponents = locationsData.map(
   (i) => {
    return <Locations key={i.id} data={i}/>
   }
  );

  return (
    <div className="App">

      <Header />
      {locationsComponents}
     
    </div>
  );
}

export default App;
