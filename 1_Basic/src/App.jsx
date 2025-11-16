import "./App.css";
import First from "./First";
import { useState } from "react";
import Second from "./Second";

function App() {
  const [addName, setAddName] = useState("");
  const [arr, setArr] = useState([]);
  return (
    <>
      <div>
        <First arrr={arr} />
        {<br />}
        <input
          type="text"
          placeholder="Add a list"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />   
        <hr />
        <button onClick={() => (setArr([...arr, addName]), setAddName(""))}>
          Add
        </button>
        {<br />}

        <Second color={"red"}>
          <h1>Pass Jsx with props</h1>
        </Second>
        <Second>
          <h1>Pass Jsx with props</h1>
          <h2
            style={{
              color: "pink",
              border: "2px dotted pink",
              marginLeft: "4rem",
              width: "70%",
            }}
          >
            Pass Jsx & style with props
          </h2>
        </Second>
      </div>
    </>
  );
}
export default App;
