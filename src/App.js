import React, {useState} from "react";
import './App.css'
import UseStateArray from "./components/UseStateArray";
import BasicForm from "./components/form/BasicForm";
import UseEffect1 from "./components/useEffect/UseEffect1";
import UseEffect2 from "./components/useEffect/UseEffect2";
import UseEffectApi from "./components/useEffect/UseEffectApi";


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
    // <UseStateArray/>
    // <BasicForm />
    // <UseEffect1 />
    // <UseEffect2 />
    <UseEffectApi />
  )
}
export default App