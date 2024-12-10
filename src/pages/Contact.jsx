import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const[left,setLeft] = useState(false)
  function leftButton() {
    setLeft(!left);
  }
  const[right,setRight] = useState(false)
  function RightButton() {
    setRight(!right);
  }
  const[top,setTop] = useState(false)
  function topButton() {
    setTop(!top);
  }
  const[buttom,setButtom] = useState(false)
  function ButtomButton() {
    setButtom(!buttom);
  }
  return (
    <div className='p-10 flex gap-3'>
      <div>
      <div className={`fixed ${left ? "translate-x-0" : "-translate-x-full"} bg-red-800  transition-all ease-in-out delay-75 duration-1000 top-1/2 left-0 transform -translate-y-1/2 p-10 text-white`}>Apsana</div>
      <button className='bg-green-500' onClick={()=>leftButton()}>left</button>
      </div>

      <div>
      <div className={`fixed ${right ? "translate-x-0": "translate-x-full"} bg-red-800  transition-all ease-in-out delay-75 duration-1000   top-1/2 right-0 transform -translate-y-1/2 p-10 mx-auto text-white`}>Apsana</div>
      <button className='bg-red-400' onClick={()=>RightButton()}>right</button>
      </div>

      <div>
      <div className={`fixed ${top ? "translate-y-10" : '-translate-y-96'} bg-red-800  transition-all ease-in-out delay-75 duration-1000 top-0 left-0  right-0 w-fit h-fit p-10 mx-auto text-white`}>Apsana</div>
      <button className='bg-blue-500' onClick={()=>topButton()}>top</button>
      </div>

      <div>
      <div className={`fixed ${buttom ? "translate-y-0" : "translate-y-full"} bg-red-800  transition-all ease-in-out delay-75 duration-1000 left-1/2 bottom-0 h-fit transform -translate-x-1/2  p-10 mx-auto text-white`}>Apsana</div>
      <button className='bg-gray-500' onClick={()=>ButtomButton()}>bottom</button>
      </div>
    </div>
  )
}

export default Contact
