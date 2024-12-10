import React from 'react'
import { useState } from 'react'

const Home = () => {

  const [abc, setABC] = useState(false)
  function checkString() {
    setABC(!abc);
  }
  return (
    <div className='flex gap-4 p-5'>
      
       <div className={`fixed ${abc ? "translate-y-10" : '-translate-y-96'} bg-red-800  transition-all ease-in-out delay-75 duration-1000 top-0 left-0  right-0 w-fit h-fit p-10 mx-auto text-white`}>Apsana</div>
      
       <button onClick={() => checkString()} className={`${abc ? "bg-red-500" : "bg-green-500"}  transition-all ease-in-out delay-75 duration-1000`}>button </button>
    </div>
  )
}
export default Home


// const[abc, setABC] = useState(0)
// function addition(){
//   setABC(abc + 1)
// }
// function subtraction(){
//   if (abc - 1 < 0) {
//     alert("Does not accept negative number!!");
//   } else {
//     setABC(abc - 1);
//   }
// }

{/* <button  onClick={()=>addition()} className='bg-green-700 w-fit h-10 text-white rounded-lg p-2'>Increment-No</button>
    <button  onClick={()=>subtraction()} className='bg-blue-700 w-fit h-10 text-white rounded-lg p-2'>Decrement-No</button> */}









