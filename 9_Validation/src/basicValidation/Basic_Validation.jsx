import { useState } from "react";

export default function Basic_Validationss() {
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  function handleName(e) {
    console.log(e.target.value);
    if (e.target.value.length > 5) {
      setNameErr("Only 5 characters allowed");
    } else {
      setNameErr();
    }
  }

  function handlePassword(e) {
    console.log(e.target.value);
    let regex=/^[A-Z0-9]+$/i;
    if(regex.test(e.target.value)) {
      setPasswordErr();
    } else {
      setPasswordErr("Only Number & Alphabet allowed");
    }
  }


  return (
    <>
      <div>
        <input
          className={nameErr ? "error" : ""}
          type="text"
          placeholder="enter name"
          onChange={handleName}
        ></input>
        <span className="red_color">{nameErr}</span>
        <br />
        <br />

        <input
          type="password"
          className={passwordErr ? "error" : ""}
          placeholder="enter password"
          onChange={handlePassword}
        ></input>
        <span className="red_color">{passwordErr}</span>
        <br />
        <br />

        <button disabled={nameErr || passwordErr}>Login</button>
      </div>
    </>
  );
}
