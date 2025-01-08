import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import bg from'../Assests/bggg.jpg'
function Signup() {
    const[name,setname]=useState("")
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("")
   const[message,setmessage]=useState("")
   const navigate=useNavigate()

   const handlesignup=(x)=>{
x.preventDefault()
const users=JSON.parse(localStorage.getItem('users'))||{}

console.log("function")
if(users[email]){
  toast.error("Email already exists")

}else{try{
  const expiry=7
  const expirytime=Date.now()+expiry*24*3600*1000
  users[email]={name,password,expirytime}
  localStorage.setItem('users',JSON.stringify(users))
  toast.success("Acount created successfully")
  console.log("sucessful")
navigate('/')
}
  catch(error){
    toast.error(error.message)
  }
}
   }
   async function checkuser(){
    try {
      const t =localStorage.getItem('users')
      console.log(t)
      if(!t){
      navigate("/signup")}
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
            <h2 className='mb-6 text-2xl font-bold text-center'>Sign Up</h2>
<form onSubmit={handlesignup} className='space-y-6'>
<input
 type='text'
 placeholder='Userame'
 value={name}
 onChange={(x)=>
    setname(x.target.value)}
    required
    className='w-full px-4 py-2  border bg-transparent rounded  focus:ring-2 focus:ring-purple-600'
></input>
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
    Signup
  </div>
</button>
</form>

<p className='py-4'>Already have an account?{""}
  <span
  onClick={()=>navigate("/login")}
  className='text-purple-400 cursor-pointer hover:underline '
  >
Login
  </span>
  
  </p>      

  </div>
    </div>
  )
}

export default Signup