import { useState } from "react";

function DropDown(){
    const [city, setCity] = useState("goa");
    return(<>
        <div>
            <h4>Select City</h4>
            <select defaultValue={'goa'} onChange={(e)=> setCity(e.target.value)}>
                <option value="noida"> Noida</option>
                <option value="goa"> Goa</option>
                <option value="mumbai"> Mumbai</option>
            </select>

            <h5>Selected City: {city}</h5>
        </div>
    </>)
}

export default DropDown;