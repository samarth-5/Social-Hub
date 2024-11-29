import React from 'react'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

export default function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='flex flex-col h-screen'>
    <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				  <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				  <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
        </Routes>
        <Toaster />
    </div>
    <div className='text-center text-black font-bold p-4'>
      © 2024 Developed by @<a href='https://samarth-dev.onrender.com/' target="_blank" className="font-semibold hover:underline">Samarth</a>. All rights reserved.
    </div>
    </div>
  )
}
