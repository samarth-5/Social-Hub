import React from 'react'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
				  <Route path='/login' element={<Login />} />
				  <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
