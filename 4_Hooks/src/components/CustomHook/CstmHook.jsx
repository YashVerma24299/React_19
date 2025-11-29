
import useToggle from './useToggle'

export default function CstmHook() {
    // naming not matters
    const [value, toggleValue] = useToggle(false);

  return (
    <>
    <div>
        <button onClick={()=> toggleValue(!value)}>Toggle</button>
        <button onClick={()=> toggleValue(true)}>Show</button>
        <button onClick={()=> toggleValue(false)}>Hide</button>

        {
           value? <h1>Custom Hook</h1> : null 
        }
    </div>
    </>
  )
}
