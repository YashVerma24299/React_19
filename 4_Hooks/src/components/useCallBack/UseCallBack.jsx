import React, { useState, useCallback, memo } from "react";

const Button = memo(({ onClick, children }) => {
    console.log('Button Renders', children);
  return <button onClick={onClick}>{children}</button>;
});

export const UseCallBack = () => {
  const [count, setCount] = useState(0);

//   const increament = () => {
//     console.log("increament inside!");
//     setCount((prev) => prev + 1);
//   };

//   const decreament = () => { 
//     console.log("decreament inside!");
//     setCount((prev) => prev + 1);
//   };

  const increament = useCallback(() => {
    console.log("increament inside!");
    setCount((prev) => prev + 1);
  }, []);

  const decreament = useCallback(() => {
    console.log("decreament inside!");
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button onClick={increament}>Increament</Button>
      <Button onClick={decreament}>Decreament</Button>
    </div>
  );
};

// 1) Button is wrapped with memo
//     So Button will re-render only when props change.

// 2) You used useCallback for increment and decrement
//     So these functions will have the same reference on every render → memo(Button) won’t re-render unnecessarily