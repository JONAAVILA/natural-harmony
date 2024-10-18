import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './view/landing/Landing'
import Login from './view/login/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
