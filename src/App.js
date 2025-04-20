import React, {useState} from "react";
import UseStateArray from "./components/UseStateArray";

const App = () =>{

  // const [myName, setMyName] = useState('Wasi')

  // const changeName=()=>{
  //   let val = myName
  //   val === 'Wasi' ? setMyName('Wasiullah') : setMyName('Wasi')
    
  // }

  return(
    // <div>
    //   <h2>{myName}</h2>
    //   <button className="btn" onClick={changeName}>Click to change name</button>
    // </div>
    <UseStateArray/>
  )
}
export default App