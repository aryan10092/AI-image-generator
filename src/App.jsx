import { useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {ToastContainer} from "react-toastify"
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    const cleanupExpiredUsers = () => {
      const users = JSON.parse(localStorage.getItem("users")) || {};
      const currentTime = Date.now();
  
      // Iterate through users and delete expired ones
      for (const email in users) {
        if (users[email].expirationTime && currentTime > users[email].expirationTime) {
          delete users[email];
        }
      }
  
      localStorage.setItem("users", JSON.stringify(users)); // Update localStorage
    };
  
    cleanupExpiredUsers();
  }, []);
  
  const [count, setCount] = useState(0)

  return (
    <>
<ToastContainer position='top-center' autoClose={3000}/>
   <Routes>
<Route path='/' element={<Home/>}/>

    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
 
    </>
  )
}

export default App
