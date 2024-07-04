import Head from "next/head";

export default function Pricing() {
  return (
    <>
      <div className="relative bg-black bg-opacity-90 p-6">
        <div className="container mx-auto">
          <div className="text-white">
            <div className="text-center md:text-center p-8 md:p-24">
              <p className="font-semibold p-2">Pricing</p>
              <p className="text-3xl m-2 font-semibold p-2 md:text-3xl">
                Amazing <span className="text-sky-400">Pricing</span> For your
                Projects
              </p>
              <hr className="md:text-center h-1 mt-3 mb-3 w-12 md:w-20 mx-auto" />
              <p className="font-serif text-base md:text-lg leading-normal p-4 md:p-0 lg:mx-48">
                Lorem ipsum Exercitation culpa qui dolor consequat exercitation
                fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
                sunt id pariatur Duis laboris amet exercitation veniam labore
                consectetur ea id quis eiusmod.
              </p>
            </div>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Basic Plan --> */}
            <div className="bg-black text-gray-200 p-6 rounded-lg shadow-lg border border-gray-600  hover:-translate-y-3 transition-transform cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Basic Plane</h2>
              <p className="mb-6">Try Out Basic Plan Save 20%</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-sky-400">$ 19.95</span>
                <span className="">/per month</span>
                <hr className="md:text-center  mt-10 mb-3 w-full mx-auto" />
              </div>
              <ul className="mb-6 space-y-4">
                <p className="mb-6 ">
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <li className="mb-2">Website Design</li>
                <li className="mb-2">Mobile Apps Design</li>
                <li className="mb-2">Product Design</li>
                <li className="mb-2">Digital Marketing</li>
                <li className="mb-2">Custom Support</li>
              </ul>
              <button className="relative transform scale-105 shadow-box mt-4 border border-gray-600 px-4 sm:px-6 py-3 rounded-xl overflow-hidden group bg-black hover:bg-gradient-to-t hover:from-sky-400 hover:via-sky-500 hover:to-sky-400 transition-all duration-500 ease-in-out">
                <h1 className="z-10 relative rounded-full font-semibold cursor-pointer text-white hover:text-white">
                  Choose Plane
                </h1>
                <span className="absolute inset-0 transform scale-y-0 origin-bottom bg-gradient-to-t from-sky-400 via-sky-500 to-sky-400 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
              </button>
            </div>

            {/* <!-- Standard Plan --> */}
            <div className="bg-black text-gray-200 p-6 rounded-lg shadow-lg border border-gray-600 hover:-translate-y-3 transition-transform cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
              <p className="mb-6">Try Out Basic Plan Save 20%</p>
              <div className="mb-6">
                <span className="text-4xl text-sky-400 font-bold">$ 39.95</span>
                <span className="">/per month</span>
                <hr className="md:text-center  mt-10 mb-3 w-full mx-auto" />
              </div>
              <ul className="mb-6 space-y-4">
                <p className="mb-6 ">
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <li className="mb-2">Website Design</li>
                <li className="mb-2">Mobile Apps Design</li>
                <li className="mb-2">Product Design</li>
                <li className="mb-2">Digital Marketing</li>
                <li className="mb-2">Custom Support</li>
              </ul>
              <button className="relative transform scale-105 shadow-box mt-4 border border-gray-600 px-4 sm:px-6 py-3 rounded-xl overflow-hidden group bg-black hover:bg-gradient-to-t hover:from-sky-400 hover:via-sky-500 hover:to-sky-400 transition-all duration-500 ease-in-out">
                <h1 className="z-10 relative rounded-full font-semibold cursor-pointer text-white hover:text-white">
                  Choose Plane
                </h1>
                <span className="absolute inset-0 transform scale-y-0 origin-bottom bg-gradient-to-t from-sky-400 via-sky-500 to-sky-400 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
              </button>
            </div>

            {/* <!-- Premium Plan --> */}
            <div className="bg-black text-gray-200 p-6 rounded-lg shadow-lg border border-gray-600 hover:-translate-y-3 transition-transform cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
              <p className="mb-6">Try Out Basic Plan Save 20%</p>
              <div className="mb-6">
                <span className="text-4xl text-sky-400 font-bold">$ 99.95</span>
                <span className="">/per month</span>
                <hr className="bg-pink-600 md:text-center  mt-10 mb-3 w-full mx-auto" />
              </div>
              <ul className="mb-6 space-y-4">
                <p className="mb-6 ">
                  Sed perspiciatis unde natus totam see rem aperiam eaque
                  inventore
                </p>
                <li className="mb-2">Website Design</li>
                <li className="mb-2">Mobile Apps Design</li>
                <li className="mb-2">Product Design</li>
                <li className="mb-2">Digital Marketing</li>
                <li className="mb-2">Custom Support</li>
              </ul>
              <button className="relative transform scale-105 shadow-box mt-4 border border-gray-600 px-4 sm:px-6 py-3 rounded-xl overflow-hidden group bg-black hover:bg-gradient-to-t hover:from-sky-400 hover:via-sky-500 hover:to-sky-400 transition-all duration-500 ease-in-out">
                <h1 className="z-10 text-gray-200 relative rounded-full font-semibold cursor-pointer hover:text-white ">
                  Choose Plane
                </h1>
                <span className="absolute inset-0 transform scale-y-0 origin-bottom bg-gradient-to-t from-sky-400 via-sky-500 to-sky-400 group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
              </button>
            </div>
            <p className="pb-20"></p>
          </div>
        </div>
      </div>
    </>
  ); }
