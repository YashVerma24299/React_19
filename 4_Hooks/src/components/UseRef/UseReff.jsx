// Store a value that does NOT re-render the component
// Directly access DOM elements (like input, button, div)
// const count = useRef(0);
// count.current = count.current + 1;
// You can change current anytime and React will NOT re-render.
// The UI does not update — only the value changes internally.

import { useRef } from "react";

export default function UseReff() {
  const inputRef = useRef();
  const h1Ref = useRef();

  function handleClick() {
    console.log(inputRef);
    inputRef.current.focus(); // jese hi click hoga btn pr, ek blink aajaiga input field mai...
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Bhai value dedeee...";
    // inputRef.current.value=2345678;
  }
  function toggle() {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  }

  function handle() {
    if(h1Ref.current.style.color ==  "black"){
        h1Ref.current.style.color = "red";
    }
    else{
        h1Ref.current.style.color = "black";
    }
  }

  return (
    <>
      <button onClick={toggle}>Toggle</button>
      <input type="text" placeholder="Enter user name" ref={inputRef} />
      <button onClick={handleClick}>Focus on input Field</button>
      <br />
      <br />

      <h1 ref={h1Ref}>Something new2..</h1>
      <button onClick={handle}>For H1 tag</button>
    </>
  );
}
