import React, { useState } from "react";

function CountClicks() {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount = 0;
  }

  return (
    <div>
      <p>The current count is: {count}</p>
      <button onClick={() => setCount(count + 1)}> Increase count </button>
      <button onClick={() => setCount(count - 1)}> Decrease count </button>
    </div>
  );
}

export default CountClicks;
