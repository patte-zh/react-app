import React from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello react </h1>
        <Weather city="Porto" />
      </header>
    </div>
  );
}

export default App;
