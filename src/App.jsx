import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './view/landing/Landing'
import Login from './view/login/Login'
import Signin from './view/signin/Signin'
import Navbar from './components/navbar/Navbar'
import Home from './view/home/Home'
import Error404 from './view/404/Error404'
import Profile from './view/profile/Profile'
import { useTranslation } from 'react-i18next'
import './App.css'
import Footer from './components/footer/Footer'
import { useEffect } from 'react'
import useGetStorage from './hooks/useGetStorage'

function App() {
  const getStorage = useGetStorage()
  const { i18n } = useTranslation()
  
  useEffect(()=>{
    getStorage()
  },[])

  const handleLenguage = (lng) =>{
    i18n.changeLanguage(lng)
  }

  return (
    <BrowserRouter>
      <Navbar handleLenguage={handleLenguage}  />
      <Routes>
        <Route path='/*' element={<Error404/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
