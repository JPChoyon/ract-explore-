import { useState } from "react";

export default function Counter() {
  const [count, setcount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setcount(newCount);
  };
  const reduceHandle = () => {
    const newCount = count - 1;
    setcount(newCount);
  };

  return (
    <div style={{ border: "2px solid red" }}>
      <h3>Counter : {count}</h3>
      <button onClick={handleClick}>Add</button>
      <button onClick={reduceHandle}>Reduce</button>
    </div>
  );
}
