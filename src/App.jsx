import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from'../src/components/Navigation/Header'
import { useLocation } from 'react-router-dom'
import{Routes,Route}from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Demo from '../src/pages/Demo'
import Button from '../src/pages/Button'


function App() {
  const [count, setCount] = useState(0)
    const location = useLocation()
    console.log(location,"location");
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Demo" element={<Demo/>}/>
      <Route path='/Button' element={<Button/>}/>
    </Routes>
  
    </>
  )
}

export default App
