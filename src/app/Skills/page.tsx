import React from "react";
import "../style.css";

function page() {
  return (
    <>
      <div className="relative bg-black bg-opacity-90 text-white py-32">
        <h1 className="text-center text-3xl font-bold text-sky-300">
          Coding skills
        </h1>
        <div className="mt-20 flex flex-wrap items-center justify-center h-full w-full gap-16 md:gap-28 ">
          {/* first circle  */}
          <div className="relative w-24 h-24 mr-4">
            <span className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer inline-block rounded-full">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  fill="#7DD3FC"
                  r="45"
                  stroke="white"
                  strokeWidth="10"
                  style={{ stroke: "white", fill: "none" }}
                />
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  r="45"
                  stroke="#38BDF8"
                  strokeDasharray="380"
                  strokeDashoffset="183.95"
                  strokeLinecap="butt"
                  strokeWidth="10"
                />
              </svg>
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">79%</span>
            </div>
            <p className="text-center mt-2">Javascript</p>
          </div>
          {/* second circle  */}

          <div className="relative w-24 h-24 mr-4">
            <svg
              className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer inline-block rounded-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="white"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="#38BDF8"
                strokeDasharray="425"
                strokeDashoffset="183.95"
                strokeLinecap="butt"
                strokeWidth="10"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">89%</span>
            </div>
            <p className="text-center mt-2">Tailwind css</p>
          </div>
          {/* third circle  */}

          <div className="relative w-24 h-24 mr-4">
            <svg
              className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer inline-block rounded-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="white"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="#38BDF8"
                strokeDasharray="400"
                strokeDashoffset="183.95"
                strokeLinecap="butt"
                strokeWidth="10"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">82%</span>
            </div>
            <p className="text-center mt-2">React js</p>
          </div>
          {/* fourth circle  */}

          <div className="relative w-24 h-24 mr-4">
            <svg
              className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer inline-block rounded-full"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="white"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                fill="none"
                r="45"
                stroke="#38BDF8"
                strokeDasharray="440"
                strokeDashoffset="183.95"
                strokeLinecap="butt"
                strokeWidth="10"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">95%</span>
            </div>
            <p className="text-center mt-2">Next js</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
