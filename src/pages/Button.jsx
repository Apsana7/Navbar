import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
    function submit(){
        alert("submiited successfully!!")
        navigate('/About');
    }
    const navigate = useNavigate();
  
  return (
    <div>
      <button type="submit" onClick={()=>submit()} className='w-fit h-fit p-3 bg-green-950 text-white rounded-lg shadow-lg'>submit</button>
    </div>
  )
}

export default Button
