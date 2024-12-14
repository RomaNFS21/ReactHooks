import React, { useState } from "react";

function BotaoAlternador() {
  const [estadoBotao, setEstadoBotao] = useState(false);

  const handleClick = () => {
    setEstadoBotao(!estadoBotao);
  };

  return (
    <div>
      <p></p>
      <button onClick={handleClick}>
        {estadoBotao ? "LIGADO" : "DESLIGADO"}
      </button>
    </div>
  );
}

export default BotaoAlternador;
