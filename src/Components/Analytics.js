import React from 'react'
import Cube from '../images/Fractal_Cube_7__R.png';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Cube} alt="/" />
        <div className='flex flex-col justify-center text-center md:text-left'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aliquid molestiae, praesentium, reiciendis ut veniam rem velit quas veritatis modi illo delectus? Illum doloremque, sed aperiam at quasi quis earum.</p>
          <button className='px-8 py-2 my-4 font-bold text-[#00df9a] bg-black w-max hover:bg-green-400 hover:text-black rounded-md mx-auto md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics


