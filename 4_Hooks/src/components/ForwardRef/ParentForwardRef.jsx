// Purpose: Pass a ref from parent to child component
// Allows parent component to access child's DOM node
// When the ref is created in the parent and needs to be used inside the child → use forwardRef.

import ChildForwardRef from "./ChildForwardRef";
import { useRef } from "react";

export default function ParentForwardRef() {
  const inputRef = useRef();

  function updateInput() {
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.value = 100;
  }
  return (
    <>
      <h1>Forward Ref</h1>
      <ChildForwardRef ref={inputRef}/>
      <button onClick={updateInput}>Click me!</button>
    </>
  );
}
