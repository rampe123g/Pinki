'use client'
"use client";
import React, { useState, useEffect, useRef } from "react";

function Page() {

  return (
    <>
      <div className="relative bg-black text-white">
        <div className="relative bg-black/80">
          <div className="text-center md:text-center p-8 md:p-24">
            <p className="font-semibold p-2">SERVICES</p>
            <p className="text-3xl m-2 font-semibold p-2 md:text-4xl">
              What Can I Do <span className="text-sky-400">For You?</span>
            </p>
            <hr className="md:text-center h-1 mt-3 mb-3 w-12 md:w-20 mx-auto" />
            <p className="font-serif text-base md:text-lg leading-normal p-4 md:p-0 lg:mx-60 text-white/85">
              Looking for an awesome and reliable webhosting? Try DreamHost. Get
              $50 off when you sign up with the promocode styleshout.
            </p>
          </div>
          <div className=" p-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Brand Identity Design
                  </p>
                  <p className="text-white  text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                </div> */}
                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Brand Identity Design
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Website Design
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Mobile Application Design
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Motion Graphics Design
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    Website Development
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>

                <div
                  style={{ backgroundColor: "#1f1f1f" }}
                  className="relative px-20 p-10 rounded-lg shadow-md"
                >
                  <p className="text-white font-medium text-2xl">
                    SEO & Digital Marketing
                  </p>
                  <p className="text-white text-sm font-sans">
                    Dignissimos ducimus blanditiis praesen
                  </p>
                  <span className="absolute bottom-0 right-0 transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-10 mr-16 bg-white rounded-full p-2">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="pb-20"></p>
        </div>
      </div>
    </>
  );
}

export default Page;

