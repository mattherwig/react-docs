import { useState } from "react";

export default function CounterButton({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}