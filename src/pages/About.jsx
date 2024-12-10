import React from 'react'
import { useState } from 'react'

const About = () => {
  const [slide,setSlide] = useState(false)
  function btnSlide(){
    setSlide(!slide);
  }

  return (
    <div >
      <div className='p-10 w-fit h-3'>
        <button onClick={()=>btnSlide()} className={`${slide? "w-96" : "min-w-2"} transition-all ease-in-out delay-75 duration-1000 bg-red-600`}  >Click me</button>
      </div>
    </div>
  )
}

export default About
