import React, { useState } from 'react'

function UseStateArray() {

    const myBioData = [
        {
            id:0, name: 'Wasi', age: 25
        },
        {
            id:1, name: ' Emad', age: 27
        }
    ]
    const [myArray, setMyArray]= useState(myBioData)

    const clearData = () =>{
        setMyArray([]);
    }
    const removeElement =(id)=>{
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id != id;
        })
        setMyArray(myNewArray)
    }
  return (
    <>
        {
            myArray.map((currElm)=>{
                return (
                <h1 className='data' key={currElm.id}>
                Name: {currElm.name} & Age {currElm.age} 
                <button className='btnInner' onClick={() => removeElement(currElm.id)}>Remove</button>
                </h1>
                )
            })
        }
        <button className='btn' onClick={clearData}>Clear</button>
    </>
  )
}

export default UseStateArray