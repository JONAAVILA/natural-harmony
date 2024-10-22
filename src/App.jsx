import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './view/landing/Landing'
import Login from './view/login/Login'
import Signin from './view/signin/Signin'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
