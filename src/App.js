import React from "react";
import Issues from "./components/issues";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Issues />
    </div>
  );
}

export default App;
