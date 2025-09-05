import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apresentacao from './components/Apresentacao'
import { useNavigate } from 'react-router-dom'


function App() {

  const navigate = useNavigate();
  return (
    <>
      <Apresentacao />
      
      <button onClick={() => navigate("/curriculo")}>Curriculo</button>
    </>
  )
}

export default App
