import React, { useEffect, useRef, useState } from 'react'
import aiimage from '../Assests/aiimage.jpeg'
import loadinggif from '../Assests/loading.gif'
 import dotenv from 'dotenv'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'

// dotenv.config()
const api = import.meta.env.VITE_API;
console.log(api)
function Home() {
  useEffect(()=>{
    document.body.className="bg-[#0f1b21] bg-cover"
    return()=>{
      document.body.className="";
      document.body.style.backgroundImage=""
  
    }
  })
  const [url,seturl]=useState("/")
  const[loading,setloading]=useState(false)
  const inputref=useRef(null)
  const navigate=useNavigate()


  const imagegenerator=async()=>{
    const t=localStorage.getItem('users')
    if(!t){
      toast.error("Please login first")
      navigate("/login")
      
    }
    else{
    if(inputref.current.value===""){
      return 0
    }
    setloading(true)
    try{
      console.log(api)
    const response=await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer  ${api}` ,
        "User-Agent":"Chrome"

      },
      
      body:JSON.stringify({
        prompt:`${inputref.current.value}`,
        n:1,
        size:"512x512"
      })
      
   
    }
  );
  
  if(!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)

  }

  const data =await response.json() 
console.log("generated image",data)

let imagearray=data.data
seturl(imagearray[0].url)
setloading(false)

} catch (error) {
  console.error("Error generating image:", error);
}}

async function check(){
  try {
    const t=localStorage.getItem('users')
    if(!t){

    }
  } catch (error) {
    console.log(error)
  }
}
}

  return (
    <div className='flex flex-col m-auto items-center mt-5 mb-20   ' >
    { <div className='text-4xl font-bold mb-11 text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-indigo-600'>AI Image Spectra
    </div> }
<div className='flex flex-col '>

  <div>{loading?(
    <img src={loadinggif} alt='Loading...' className=''/>):

  ( <img src={url==="/"?aiimage:url} alt='AI Image' 
    className=' mb-9  '/>)} 
    
  
  
  </div>
</div>
<div className='bg-gradient-to-br from-indigo-600 to-pink-600 p-0.5 rounded-full  '>
<div  className='flex space  h-20 items-center  rounded-full justify-between bg-slate-800'>
  <input
  ref={inputref}
  type='text'
  placeholder='Describe your image '
  className='bg-transparent text-indigo-600  w-96 mr-24 pb-2 pl-10 border-none outline-none text-lg bg-gradient-to-tr from bg-indigo-600 to-pink-600 bg-clip-text font-manrope'
  ></input>
  {/* <button className='flex items-center justify-center w-36 h-16 text-lg rounded-full cursor-pointer bg-pink-700 px-14 mr-2' onClick={()=>imagegenerator()}>Generate</button> */}
  <button className="relative inline-flex h-16 w-36 mr-2 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50" onClick={()=>imagegenerator()}>
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Generate
  </span>
</button></div>
</div>
</div>
  )
}

export default Home