import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function page() {
     const Instagram =
       "https://www.instagram.com/quran_house_academy?igsh=dGEzeG9pcXp2bjVq";
     const tiktok =
       "https://www.tiktok.com/@quranhouseacademy?_t=8jiR822uHoI&_r=1";
     const Facebook =
       "https://www.facebook.com/profile.php?id=100076029348346&mibextid=ZbWKwL";
     const twitter =
       "https://x.com/hafizwaqar1982?t=qVtTWv8Oy9V73NU_7YXfKg&s=09";


  return (
    <>
      {/* footer  */}

      <footer className="bg-black text-white py-8">
        <div className="mx-auto">
          <div className="text-center md:text-center p-8 md:p-24">
            <p className="font-semibold p-2 ">Contact</p>
            <p className="text-3xl m-2 font-semibold  md:text-4xl">
              I'd Love To Hear <span className="text-sky-400">From You</span> .
            </p>
            <hr className="md:text-center h-1 mt-3 mb-3 w-12 md:w-20 mx-auto" />
            <p className="font-serif text-base md:text-lg leading-normal p-4 md:p-0 lg:mx-48">
              Lorem ipsum Do commodo in proident enim in dolor cupidatat
              adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
              ipsum Consectetur ut in in eu do.
            </p>
          </div>
          <form>
            <div className=" max-w-lg mx-auto p-2 font-serif">
              <div className="">
                <div className="flex flex-col space-y-5">
                  <label htmlFor="email">
                    <input
                      id="name"
                      name="name"
                      type="name"
                      autoComplete="off"
                      className="w-full  mt-10 focus:outline-none border-b placeholder-white/30 border-white/30 bg-black/95"
                      placeholder="Name"
                      required
                    />
                  </label>

                  <label htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      className="w-full  mt-10 focus:outline-none border-b placeholder-white/30 border-white/30 bg-black/95"
                      placeholder="Email"
                      required
                    />
                  </label>
                  <label htmlFor="password">
                    <input
                      id="subject"
                      name="subject"
                      type="subject"
                      autoComplete="off"
                      className="w-full mt-10  focus:outline-none border-b placeholder-white/30 border-white/30  bg-black/95"
                      placeholder="Subject"
                      required
                    />
                  </label>

                  <div className="block ">
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="message"
                      className=" w-full mt-10 placeholder-white/30 border-white/30 focus:outline-none border-b  bg-black/95"
                    ></textarea>
                  </div>

                  <button className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer w-full py-3 font-medium text-white rounded-lg mt-10 p-5 bg-sky-500 inline-flex space-x-2 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="footer-row flex flex-col md:flex-row justify-center mt-20 gap-4 md:gap-36 font-sans">
            <div className="footer-column text-center px-4 mb-8 md:mb-0">
              <h3 className="text-md font-bold mb-2 text-sky-400">
                WHERE TO FIND ME
              </h3>
              <p className="p-1">1600 Amphitheatre Parkway</p>
              <p className="p-1">Mountain View, CA</p>
              <p className="p-1">94043 US</p>
            </div>
            <div className="footer-column text-center px-4 mb-8 md:mb-0">
              <h3 className="text-md font-bold mb-2 text-sky-400">EMAIL AT</h3>
              <p className="p-1">someone@kardswebsite.com</p>
              <p className="p-1">info@kardswebsite.com</p>
            </div>
            <div className="footer-column text-center px-4">
              <h3 className="text-md font-bold mb-2 text-sky-400">
                CALL ME AT
              </h3>
              <p className="p-1">Phone: (+63) 555 1212</p>
              <p className="p-1">Mobile: (+63) 555 0100</p>
              <p className="p-1">Fax: (+63) 555 0101</p>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right md:mr-60 mt-28">
          All Rights Reserved. © Designed By <span className='text-sky-400'>MAX SOLUTIONS</span> 
        </div>
      </footer>
    </>
  );
}

export default page
