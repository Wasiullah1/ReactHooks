import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
  const [users, setUsers] = useState([])

  const getUsers = async ()=>{
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }
  useEffect(()=>{
    getUsers();
  }, [])
  return (
    <>
        <h2>List of GitHub Users</h2>
        <div className='container-fluid mt-5'>
            <div className='row text-center'>
                {
                    users.map((curElement) => {
                        return(
                            <div className='col-10 col-md-4 mt-5' key={curElement.id}>
                                <div className='card p-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='image'><img src={curElement.avatar_url} className='rounded' width='155' /></div>
                                        <div className='ml-3 w-100'>
                                            <h4 className='mb-0 mt-0 textLeft'>{curElement.login}</h4><span className="textLeft">Web Developer</span>
                                            <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                                                <div className='d-flex flex-column'><span className="articles">Articles</span><span className='number1'>30</span></div>
                                                <div className='d-flex flex-column'><span className="followers">Followers</span><span className='number2'>930</span></div>
                                                <div className='d-flex flex-column'><span className="rating">Rating</span><span className='number3'>3.0</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    </>
  )
}

export default UseEffectApi