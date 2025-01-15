import "./App.css";
import React, { useState } from "react";
import Contador from "./Components/Contador";
import BotaoAlternador from "./Components/BotaoAlternador";
import ListaDeTarefas from "./Components/ListaDeTarefas";

function App() {
  return (
    <div className="App">
      <Contador />
      <BotaoAlternador />
      <ListaDeTarefas />
    </div>
  );
}

export default App;
