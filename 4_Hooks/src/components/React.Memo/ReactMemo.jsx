import { useState } from "react";
import Count from "./CountMemo";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <h1>{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increacse</button>
      </div>
      <Count/>
    </>
  );
};


// React.memo is used to prevent unnecessary re-renders of a child component when its props are not changing.
// It makes the component re-render only when props change.