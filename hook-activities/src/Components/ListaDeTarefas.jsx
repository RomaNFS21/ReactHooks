import React, { useState } from "react";

function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const listaDeTarefas = [];

  const handleChange = (event) => {
    setTarefa(event.target.value);
  };
  return (
    <div>
      <p></p>
      <label>
        Tarefa:
        <input type="text" value={tarefa} onChange={handleChange} />
      </label>
      <button onClick={handleChange}>Salvar </button>
      <p></p>
      <list>
        <h1> Lista de Tarefas </h1>
      </list>
    </div>
  );
}

export default ListaDeTarefas;
