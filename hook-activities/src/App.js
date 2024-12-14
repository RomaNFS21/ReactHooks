import "./App.css";
import React, { useState } from "react";
import Contador from "./Components/Contador";
import BotaoAlternador from "./Components/BotaoAlternador";

function App() {
  return (
    <div className="App">
      <Contador />
      <BotaoAlternador />
    </div>
  );
}

export default App;
