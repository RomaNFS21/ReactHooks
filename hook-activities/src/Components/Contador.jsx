import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  function Adicionar() {
    setCount(count + 1);
  }

  function Retirar() {
    if (count === 0) {
    }

    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <p>The current count is: {count}</p>
      <button onClick={Adicionar}> Increase count </button>
      <button onClick={Retirar}> Decrease count </button>
    </div>
  );
}

export default Contador;
