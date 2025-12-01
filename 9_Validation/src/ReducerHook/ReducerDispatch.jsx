import { useReducer } from "react";

const emptyData = {
  name: "",
  email: "",
  password: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  console.log(data, action);
  return { ...data, [action.type]: action.v };
};

export default function ReducerDispatch() {
  // const [data, setData]=useReducer(fnName, emptyData);
  const [state, dispatch] = useReducer(reducer, emptyData);

  console.log(state)
  return (
    <div>
      <h1>Use Reducer</h1>
      <input
        type="text"
        placeholder="enter name"
        onChange={() => dispatch("nameeeeeee")}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter email"
        onChange={(e) => dispatch({ v: e.target.value, type: "email" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter password"
        onChange={(e) => dispatch({ v: e.target.value, type: "password" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter city"
        onChange={(e) => dispatch({ v: e.target.value, type: "city" })}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter address"
        onChange={(e) => dispatch({ v: e.target.value, type: "address" })}
      />
      <br />
      <br />
      <button>Add Details</button>
    </div>
  );
}
