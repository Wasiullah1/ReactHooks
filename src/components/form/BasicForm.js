import React, { useState } from 'react'

const BasicForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([])

    const formSubmit = (e) => {
        e.preventDefault();

        if (email && password){
            const newEntry = {id: Date().getTime().toString(), email: email, password: password}
            setAllEntry([...allEntry, newEntry])

            setEmail("");
            setPassword("");
        }else{
            alert('Please Fill the data')
        }
        
    }
    
  return (
    <>
        <form action="" onSubmit={formSubmit}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button className='btn' type='submit'>Login</button>

        </form>
        <div >
            {allEntry.map((currElm)=>{
                const {id, email, password} = currElm
                return(
                    <div className='output' key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>
                )
            })}
        </div>
    
    </>
  )
}

export default BasicForm