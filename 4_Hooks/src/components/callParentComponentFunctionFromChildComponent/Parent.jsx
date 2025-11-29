import Child from "./Child";

export default function Parent() {
  function displayName(name){
    alert(name);
  }

  return (
    <>
      <h2>Call Parent component function from the Child component</h2>
      <Child displayname={displayName} name="Yash"/>
      <hr />
      <Child displayname={displayName} name="Ritik"/>
      <hr />
      <Child displayname={displayName} name="SAchin"/>
    </>
  );
}
