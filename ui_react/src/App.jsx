import { useState } from 'react'
import { BrowserRouter, Routes, route } from 'react-router-dom';
import Login from './Auth/Login';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
