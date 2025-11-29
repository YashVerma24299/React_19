//Generate unique Id

import { useId } from "react";

export default function UseId() {
  const name = useId();
  const password = useId();
  return (
    <>
      <div>
        <h3>Name: {name}</h3>
        <h3>Password: {password}</h3>
      </div>
    </>
  );
}
