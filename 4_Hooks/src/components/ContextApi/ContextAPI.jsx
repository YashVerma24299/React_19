import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function ContextAPI() {
    const [subject, setSubject] = useState("");
  return (
    <>
    <div style={{background:"green" , padding:"10px"}}>
        {/* Method 1 */}
        {/* <h1>Context API</h1>
        <College/> */}

        {/* Method 2 */}
        <SubjectContext.Provider value={subject}>
            <select onChange={(e)=>setSubject(e.target.value)}>
                <option value=""> Select subject</option>
                <option value="History">History</option>
                <option value="Biology">Biology</option>
                <option value="Hindi">Hindi</option>
                <option value="Physics">Physics</option>
            </select>
            <h1>Context API</h1>
            <College/>
        </SubjectContext.Provider>
    </div>
    </>
  )
} 