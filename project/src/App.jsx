import { useState } from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import Register from './layouts/Register/Register'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    <Footer/>      
    </>
  )
}

export default App
