import { useReducer } from "react";
//   const [state, dispatch] = useReducer(reducer, initialState);
// dispatch ->  to send actions to the reducer function


export default function UseReducer() {
  const reducer = (state, action) => {
    if(action.type=="INC"){
      return state+1;
    }
    if(action.type=="DEC"){
      return state-1;
    }
    if(action.type=="VAL"){
      return state+ action.payload;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
        <button onClick={() => dispatch({ type: "VAL", payload: 10})}>Incraese by 10</button>
      </div>
    </>
  );
}
