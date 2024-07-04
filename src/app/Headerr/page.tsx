import React from 'react'

function page() {
  return (
    <div>
      {/* font end      */}
      <div className="relative">
        <video autoPlay loop muted className="w-full object-cover h-screen">
          <source src="ai.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 opacity-30 bg-black/50"></div>

        <div className="absolute left-0 top-1/4 text-white text-left p-6 md:mx-14 mx-2">
          {/* <!-- Text content --> */}
          <p className="text-xl md:text-2xl lg:text-3xl text-sky-400 font-serif">
            HELLO WORLD
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            I'm Albert Joy
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-4 font-serif">
            FRONT-END DEVELOPER
          </p>
          <button className="text-lg md:text-xl lg:text-2xl font-bold p-3 md:p-4 mt-3 border-gray-400 border-2 hover:border-sky-500">
            MORE ABOUT ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default page
