import { useState } from "react";

function Radio(){
    const [gender, setGender] = useState("");
    return(<>
        <div>
            {/* "name" field required for all with same value */}
            <input type="radio" name="gender" onChange={(e)=> setGender("Male")}/>Male
            <br />
            <input type="radio" name="gender" onChange={(e)=> setGender("Female")}/>Female
            <br />
            <input type="radio" id="a" name="gender" onChange={(e)=> setGender("Transgender")}/>
            <label htmlFor="a">Transgender</label>

            {gender && <h4>Selected Gender: {gender}</h4>}
        </div>
    </>)
}

export default Radio;