import React from 'react';
// import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
              <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow With Data</h1>
              <div className='flex justify-center self-center gap-1'>
                  <p className='md:text-5xl sm:text-6xl text-4xl font-bold'>Fast, Flexible Financing For</p>
                  {/* <Typed
                      strings={['BTB', 'BTC', 'SASS']}
                      typeSpeed={120}
                      backgSpeed={140}
                      loop
                      className='md:text-5xl sm:text-6xl text-4xl font-bold md:pl-4 pl-2'/> */}
              </div>
              <p className='md:text-2xl text-xl font-bold text-gray-600'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
              <button className='bg-[#00df9a] w-[200px] rounded-md my-6  mx-auto font-medium py-3 text-black hover:bg-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
