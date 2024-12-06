import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useGetStorage from './hooks/useGetStorage'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {
        Error404,
        About,
        Admin,
        Contact,
        Home,
        Landing,
        Login,
        Profile,
        Signin,
        Store,
        Validate
      } from './view'

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
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/validate' element={<Validate/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
