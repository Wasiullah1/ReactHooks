import React, {useState, useEffect}from 'react'

const UseEffect1 = () => {
   const [count, setCount]= useState(0);

   useEffect(()=>{
    if(count >= 1){
        document.title = `Chats ${count}`
    }else{
        document.title = `Chats`
    }
   }, [count])

   const clickMe = ()=>{
    setCount(count + 1)
   }
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn' onClick={clickMe}>Click</button>
    </div>
  )
}
export default UseEffect1
