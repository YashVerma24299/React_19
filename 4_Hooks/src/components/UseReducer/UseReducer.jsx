import { useReducer } from "react";
//   const [state, dispatch] = useReducer(reducer, initialState);

export default function UseReducer() {
  const reducer = (state, action) => {
    if(action.type=="INC"){
      return state+1;
    }
    if(action.type=="DEC"){
      return state-1;
    }
    
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
      </div>
    </>
  );
}
