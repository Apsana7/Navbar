import React from 'react'
import { useState } from 'react'

const Demo = () => {
    const[UserName, setUserName]= useState('')
    const[Password, setPassword] = useState(" ")
    const[Email, setEmail] = useState(" ")

    function Submit(){
        alert(UserName+" "+Password+" "+Email)
    }

    return (
        <div className='h-lvh flex items-center justify-center bg-gray-200'>
        <div className='flex flex-col items-center gap-9 bg-purple-400 p-10 '>

          <div>
            <h6 className='items-center text-2xl'>
              Login Form
            </h6>
          </div>

          <div className='flex flex-col gap-4'>

            <div className='flex gap-2 capitalize'>
              <h1 className='w-28'>
                Name:
              </h1>
              <input type="text" placeholder="Name" className="outline-none  border-b-2 border-black"
               onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>

            <div className='flex gap-2 capitalize'>
              <h1 className='w-28'>
                Password:
              </h1>
              <input type="password" placeholder="password" className='outline-none border-b-2 border-black '
               onChange={(e)=>{
                
                console.log(e.target.value)
                setPassword(e.target.value)}} />
            </div>

            <div className='flex gap-2 capitalize'>
              <h1 className='w-28'>
                Email:
              </h1>
              <input type="text" placeholder="Email" className='outline-none border-b-2 border-black ' onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
          </div>
          <div className='flex gap-3 flex-col'>
            <button className='border-2 border-none w-24 h-9 text-white capitalize rounded-xl bg-green-800' onClick={()=>Submit()}>submit</button>
       </div>
       </div>
       </div>
    )
}

export default Demo
