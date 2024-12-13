import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useGetStorage } from './hooks'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Navbar, Footer } from './components'
import './App.css'
import{
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
        Validate,
        AdminLogin,
        SigninAdminView
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
        <Route path='/admin/signin' element={<SigninAdminView/>} />
        <Route path='/admin/login' element={<AdminLogin/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
