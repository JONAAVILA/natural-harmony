import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './view/landing/Landing'
import Login from './view/login/Login'
import Singin from './view/singin/Singin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/singin' element={<Singin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
