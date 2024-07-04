import React from 'react'

function page() {
  return (
    <>
      
{/* sign up box  */}

<div
className='bg-gray-200'>
<div className="text-center md:text-center p-8 md:p-24">
    <p className="text-pink-600 font-semibold p-2 text-xl md:text-2xl">SERVICES</p>
    <p className="text-3xl m-2 font-semibold p-2 md:text-4xl">Styleshout Recommends Dreamhost.</p>
    <hr className="bg-pink-600 md:text-center h-1 mt-3 mb-3 w-12 md:w-20 mx-auto" />
    <p className="font-serif text-base md:text-lg leading-normal p-4 md:p-0 lg:mx-60">Looking for an awesome and reliable webhosting? Try DreamHost. Get $50 off when you sign up with the promocode styleshout.</p>
     <button className=' font-bold bg-black/80 hover:bg-black/95 text-white px-8 py-5 mt-3 hover:border-pink-700 '>SIGN UP NOW</button>
</div>
</div>

    </>
  )
}

export default page
