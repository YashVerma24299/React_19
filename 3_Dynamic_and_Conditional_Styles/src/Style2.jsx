// need to install this..
// npm i styled-components
import styled from "styled-components";

export default function Style2() {
  // Write first letter capital
  // and if first letter ids small it not work
  const Headingh1 = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    border: 1px solid;
    padding: 5px;
    width: 50vh;
  `;

  //   CamelCase
  const Headingh2 = styled.h2({
    fontSize: "1.5em",
    textAlign: "center",
    color: "#e90606ff",
    border: "1px solid",
    padding: "5px",
    width: "50vh",
  });

  const Divvvvvvvvvvvvv = styled.div``;

  //   const Btn = styled.button``;   // ✅ WORKS
  //   const btn = styled.button``;   // ❌ NOT WORK
  const Btn = styled.button`
    color: ${(props)=> (props.color? props.color : 'orange')};
    width: 100px;
  `;

  return (
    <>
      <Divvvvvvvvvvvvv>
        <Headingh1>Something new..</Headingh1>
        <Headingh2>Something new..</Headingh2>
        <Btn > Click me!</Btn>
        <Btn color='red' > Click me!</Btn>
      </Divvvvvvvvvvvvv>
    </>
  );
}
