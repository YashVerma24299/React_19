import { useState, Activity} from "react";

function App(){
  const [showHome, setShowHome] = useState(true);
  return (
    <>
      <h1>Activity in React 19.2</h1>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>UseForm</button>
      <Activity mode={showHome==true? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={showHome==false? 'visible' : 'hidden'}>
        <UseForm />
      </Activity>
    </>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}
function UseForm() {
  return (
    <div className="">
      <h1>UseForm Page</h1>
      <input type="text"placeholder="enter name" />
      <input type="text"placeholder="enter email" />
      <input type="text"placeholder="enter city" />
      <input type="text"placeholder="enter state" />
    </div>
  );
}

export default App;
