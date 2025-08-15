import React from 'react'

function Newsletter() {
  return (
    <div className='p-7 text-white h-[50vh] flex flex-col justify-center' >
          <h1 className='font-bold text-2xl '>Want tips & tricks to optimize your flow?</h1>
          <p className=''>Sign up to our newletter and stay up to date.</p>

          <form action="" className='my-5 flex gap-2'>
              <input type="email" name="email" id="email" placeholder='Enter Your Email' className='w-full rounded-md p-2 text-[#00df9a] outline-none md:grid-cols-2'/>
              <button className='bg-[#00df9a] py-2 px-4 rounded-md font-bold w-[20%] sm:py-1 sm:px-2'>Notify me</button>
          </form>

          <p>We care about the protection of your data. Read our <span className='text-blue-500 underline'>Privacy Policy</span> </p>
    </div>
  )
}

export default Newsletter
