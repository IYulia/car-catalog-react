import React from "react";
import "./App.css";
import CarApiFetcher from "./components/CarApiFetcher";

function App() {
  return (
    <div className="App">
      <div className="containerStyle">
        <CarApiFetcher />
      </div>
    </div>
  );
}

export default App;
