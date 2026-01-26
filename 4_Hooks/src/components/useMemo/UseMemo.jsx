import { memo, useMemo, useState } from "react";

export const UseMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <ExpensiveCalculation />
        <button onClick={() => setCount((prev) => prev + 1)}>
          Re-Render Parent
        </button>
        <p>Parent re-renders: {count}</p>
      </div>
    </>
  );
};

const ExpensiveCalculation = () => {
  const sum = () => {
    console.log("Calculating Sum...");
    
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = sum();
  return <p> sum: {total} </p>;
};

// Problem:
//     ExpensiveCalculation runs a very heavy loop.
//     So whenever the parent component re-renders, this expensive function runs again, making the app slow.
//     Even if the UI doesn’t change, React still re-executes the component function on re-render.

// Solution 1: React.memo
//     React.memo prevents a child component from re-rendering if its props do not change.
//     So if the parent re-renders but ExpensiveCalculation1 gets no new props → it will NOT re-render.
const ExpensiveCalculation1 = memo(() => {
  const sum = () => {
    console.log("Calculating Sum...");
    
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };

  const total = sum();
  return <p> sum: {total} </p>;
});


// Solution 2: useMemo
//     useMemo memoize the result of an expensive calculation so it doesn’t run again on every render.
//     sum() runs only once
//     On parent re-render → React uses the saved value, not recalculating again
const ExpensiveCalculation2 = () => {
  const sum = () => {
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(()=> sum(),[]);

  return <p> sum: {total} </p>;
};