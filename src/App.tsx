import React from "react";
import { TelematicData } from "./components/TelematicData";
import "./App.css";

function App() {
  return (
    <div className="App" data-testid="app">
      <TelematicData />
    </div>
  );
}

export default App;
