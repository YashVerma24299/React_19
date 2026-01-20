import { FaAlignJustify } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { useState } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState();
  const now= new Date();
  console.log(now);
  const formatDate =now.toLocaleDateString(now);
  console.log("formatDate",formatDate);
  const formatTIme = now.toLocaleTimeString(now);
  console.log(("formatTime", formatTIme));
  
  setTimeout(()=>{
    const now= new Date();
    const formatTIme = now.toLocaleTimeString(now);
    setCurrentTime(formatTIme)
  },[1000]);
  
  
  return (
    <div >
      <div >
        {/* Icons */}
      <FaAlignJustify style={{color:"pink"}} size={50}/>
      <AiFillMessage/>
      </div>

      <h3>{currentTime}</h3>
    </div>
  )
}

export default App