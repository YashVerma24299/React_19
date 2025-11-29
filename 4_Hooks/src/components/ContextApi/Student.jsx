import { useContext } from 'react'
import { SubjectContext } from './ContextData';

export default function Student() {
    const subject = useContext(SubjectContext);
  return (
    <div style={{background:"red" , padding:"10px"}}>
        <h1>Student:{subject}</h1>
    </div>
  )
}
