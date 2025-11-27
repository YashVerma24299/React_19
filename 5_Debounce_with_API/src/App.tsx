import {  useState } from 'react';
import './App.css'
import useWikiSearch from './hooks/UseDebounce';

export default function App(){
  const [text, setText] = useState<string>("");
  const {loading, items} = useWikiSearch(text);

  return(
    <>
      <div className='mainn' >
        <h2>Wiki Search(Debounced)</h2>

        <input placeholder='Search... ' value={text} onChange={(e)=> setText(e.target.value)} className='input'/>

        {loading && <p>Loqading....</p>}

        <ul>
          {items.map((item,ind)=>(
            <li key={ind}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
