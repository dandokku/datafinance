import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function NavBar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='text-white flex h-24 max-w-[1240px] mx-auto p-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data Finance</h1>  
          
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Home</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Company</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Resources</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>About</li>
            <li className='p-4 cursor-pointer hover:text-[#00df9a]'>Contact</li>
            {/* <li className='p-4 w-full bg-white text-green-800'>Get Started</li> */}
        </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> :  <AiOutlineMenu size={30} />}
      </div>
      
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300] h-full' : 'fixed left-[-100%] ease-in-out duration-500'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4
      '>Data Finance</h1> 
        <ul className="uppercase">
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
