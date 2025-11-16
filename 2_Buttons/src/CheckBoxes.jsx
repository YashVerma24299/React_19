import { useState } from "react"

function CheckBoxes(){
    const [skills, setSkills] = useState(["A", 'B'])
    function handleChange(e){
        console.log(e.target.checked);
        if(e.target.checked){
            setSkills([...skills, e.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }

    return(<>
        <div>
            <input value={"Php"} type="checkbox" id="one" onChange={handleChange}/>
            <label htmlFor="one">PHP</label>
            <br />
            <input value={"React"} type="checkbox" id="two" onChange={handleChange}/>
            <label htmlFor="two">REACT</label>
            <h3>{skills.toString()}</h3>
        </div>
    </>)
}

export default CheckBoxes;