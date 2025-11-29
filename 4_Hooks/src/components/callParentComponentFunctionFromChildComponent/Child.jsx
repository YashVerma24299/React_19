export default function Child({displayname, name}){
  return (
    <>
      <button onClick={()=>displayname(name)}>Display Alert</button>
    </>
  )
}
