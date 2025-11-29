import { useRef } from "react";

export default function UncontrolledComponents() {
  function handle(e) {
    e.preventDefault();
    const user = document.querySelector("#user").value;
    console.log(user);
  }

  const userRef = useRef();
  const passwordRef = useRef();

  function handleRef(e) {
    e.preventDefault();
    console.log(userRef.current.value);
    console.log(passwordRef.current.value)
  }
  return (
    <>
      <h2>Uncontrolled Component with QuerySelector</h2>
      <form method="post" onSubmit={handle}>
        <input type="text" placeholder="enter username" id="user" />
        <br />
        <input type="password" placeholder="enter password" id="password" />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <br />
      <br />

      <h2>Uncontrolled Component with useRef</h2>
      <form method="post" onSubmit={handleRef}>
        <input type="text" placeholder="enter username" ref={userRef}/>
        <br />
        <input type="password" placeholder="enter password" ref={passwordRef}/>
        <br />
        <button>Submit with Ref</button>
      </form>
    </>
  );
}
