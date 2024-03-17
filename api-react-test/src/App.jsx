import { useState } from "react";
import Message from './Message.jsx'
function App(){
  const [advice, setAdvice] = useState("Hello World");
  const [count, setCount] = useState(0);
  async function getData(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c+1);
  }

  return(<div className="parent">
    <h1>{advice}</h1>
    <button onClick={getData}>Get Advice</button>
    <Message count={count}/>
  </div>);
}
export default App
