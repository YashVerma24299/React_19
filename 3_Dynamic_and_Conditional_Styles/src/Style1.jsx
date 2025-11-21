import { useState } from "react";

export default function Style1() {
  const [card, setCard] = useState({
    backgroundColor: "#e9e1e1ff",
    width: "25%",
    margin: "10px",
    padding: "15px",
  });

  function updateTheme(BgColor, colorr) {
    setCard({ ...card, backgroundColor: BgColor, color: colorr });
  }
  return (
    <>
      <h2>Dynamic and Conditional Style</h2>

      <div>
        <button onClick={() => updateTheme("#e9e1e1ff", "black")}>
          Default Theme
        </button>
        <button onClick={() => updateTheme("red", "white")}>
          Change Theme
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={card}>
          <h3>Yash Verma</h3>
          <h4>Software Developer</h4>
        </div>
        <div style={card}>
          <h3>Yash Verma</h3>
          <h4>Software Developer</h4>
        </div>
        <div style={card}>
          <h3>Yash Verma</h3>
          <h4>Software Developer</h4>
        </div>
      </div>
    </>
  );
}
