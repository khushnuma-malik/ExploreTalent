import React from 'react'
import Link from 'next/link'
import { FaDownload } from "react-icons/fa";
const Header = () => {
  return (
    <div className='bg-gray-800'>
        <header class="text-bold body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gray-800   ">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span class="ml-3 text-3xl text-slate-600 text-bold">Khushnuma @</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center font-bold  text-base justify-center">
      <Link href='/'><p class="mr-5 text-slate-700 hover:text-slate-300   ">Home</p></Link>
      <a href='#about'><p class="mr-5 text-slate-700 hover:text-slate-300   ">About</p></a>
      <a href='#skills'><p class="mr-5 text-slate-700 hover:text-slate-300   ">Skills</p></a>
      <a href='#project'> <p class="mr-5 text-slate-700 hover:text-slate-300   ">Project</p></a> 
      <a href='#connect '> <p class="mr-5 text-slate-700 hover:text-slate-300   ">Connect</p></a> 
    </nav>
   <a href="./Doc/Resume.pdf" download ><button class="inline-flex items-center font-bold text-black text-bold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-base mt-4 md:mt-0">Download CV
   <FaDownload  className='ml-2'/>
    </button></a>

  </div>

  
</header>
    </div>
  )
}

export default Header
