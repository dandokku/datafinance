import React from 'react'
import Ball from '../images/Fractal_Cube_7__R.png';

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full border rounded-md shadow-xl flex flex-col p-4 my-4 hover:translate-y-4 duration-100 '>
          <img src={Ball} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500gb Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='font-bold bg-[#00df9a] w-[50%] mx-auto my-3 py-2 rounded-md hover:bg-black hover:text-white'>Start Trial</button>
        </div>

        <div className='w-full border rounded-md shadow-xl flex flex-col scale-110 p-4 my-4 hover:translate-y-4 duration-100'>
          <img src={Ball} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Premium User</h2>
          <p className='text-center text-4xl font-bold'>$250</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>2TB Storage</p>
            <p className='py-2 border-b mx-8'>Unlimited Granted User</p>
            <p className='py-2 border-b mx-8'>Send unlimited GB</p>
          </div>
          <button className='font-bold bg-[#00df9a] w-[50%] my-3 mx-auto py-2 rounded-md hover:bg-black hover:text-white'>Start Trial</button>
        </div>

        <div className='w-full border rounded-md shadow-xl flex flex-col p-4 my-4 hover:translate-y-4 duration-100 '>
          <img src={Ball} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2 className='text-2xl font-bold text-center py-8'>Broke User</h2>
          <p className='text-center text-4xl font-bold'>$50</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>100gb Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 1 GB</p>
          </div>
          <button className='font-bold bg-[#00df9a] w-[50%] my-3 mx-auto py-2 rounded-md hover:bg-black hover:text-white'>Start Trial</button>
        </div>
      </div>

    </div>
  )
}

export default Cards
