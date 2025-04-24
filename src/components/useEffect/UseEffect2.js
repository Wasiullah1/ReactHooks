import React, {useState, useEffect} from 'react'

const UseEffect2 = () => {

    const [widthScreen, setWidthScreen] = useState(window.screen.width);

    const actualWidth = () =>{
        setWidthScreen(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', actualWidth)
        return()=>{
            window.removeEventListener('resize', actualWidth)
        }
    })

  return (
    <div>
        <h1>Screen Width</h1>
        <p>{widthScreen}</p>
    </div>
  )
}

export default UseEffect2