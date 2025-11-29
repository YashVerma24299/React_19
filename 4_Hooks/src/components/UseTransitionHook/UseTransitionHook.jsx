// Useful for showing a waiting time during signup, on signup buttton par hii...
// useful to show a loading or pending state in GENERAL

import { useTransition } from "react"

export default function UseTransitionHook(){
    const [pending, startTransition] = useTransition();

    function handleButton(){
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000));
            console.log("Sibmitted!")
        })
    }

  return (
    <>
        <div>
            <h1>UseTransition Hook in React</h1>
            {pending ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/> : null}
            <button disabled={pending}  onClick={handleButton}>{pending? "Submitting..." : "Submit"}</button>
        </div>
    </>
  )
}
