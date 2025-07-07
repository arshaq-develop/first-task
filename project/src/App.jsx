import { useState } from 'react'

import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './layouts/Home'
import Login from './layouts/Login'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    <Footer/>      
    </>
  )
}

export default App
