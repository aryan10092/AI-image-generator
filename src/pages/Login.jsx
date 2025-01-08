import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import bg from'../Assests/bggg.jpg'
function Login() {
    
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
 
   const navigate=useNavigate()

   const handlesignup=(x)=>{
x.preventDefault()
try{
const users=JSON.parse(localStorage.getItem('users'))||{}

console.log("function")
if(!users[email]){
throw new Error("Email does not esists.please create an accunt")

navigate("/signup")
}
if(users[email].password!==password){
    // toast.error("Incorrect password.please try again")
     throw new Error("Incorrect password.please try again")

}
toast.success("Login successful!")
navigate("/")
}
  catch(error){
    toast.error(error.message)
    console.log(error)
  }
}
   
   async function checkuser(){
    try {
      const t =localStorage.getItem('users')
      console.log(t)
      if(!t||t==="{}"){
      navigate("/login")}
      else{
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
   }
 useEffect(()=>{
   checkuser()
 },[])
useEffect(()=>{
  document.body.className="bg-cover bg-center  bg-no-repeat h-screen"
  document.body.style.backgroundImage=`url(${bg})`
  return()=>{
    document.body.className="";
    document.body.style.backgroundImage=""

  }
},[])
  return (
    <div className='flex flex-col text-white items-center justify-center min-h-screen '>
    <div className='text-4xl font-bold mb-11 text-white '>AI Image Spectra
    </div> 
        <div className='w-full max-w-sm p-6 backdrop-blur-[20px] rounded-xl shadow'>
            <h2 className='mb-6 text-2xl font-bold text-center'>Login</h2>
<form onSubmit={handlesignup} className='space-y-6'>

<input
 type='email'
 placeholder='Email'
 value={email}
 onChange={(x)=>
    setemail(x.target.value)}
    required
    className='w-full px-4 py-2  border bg-transparent rounded  focus:ring-2 focus:ring-purple-600'
></input>
<input
 type='password'
 placeholder='Password'
 value={password}
 onChange={(x)=>
    setpassword(x.target.value)}
    required
    className='w-full px-4 py-2  border rounded bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600'
></input>

<button className="p-[3px] w-full relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Login
  </div>
</button>
</form>

<p className='py-4'>
Don't have an account? {""}
  <span
  onClick={()=>navigate("/signup")}
  className='text-purple-400 cursor-pointer hover:underline '
  >
Signup
  </span>
  
  </p>      

  </div>
    </div>
  )
}

export default Login
