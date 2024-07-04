'use client'
import React from "react";
import Image from "next/image";
import Image1 from "../../../public/about.jpg";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Page() {
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
      <header
      >
        <div
          className="wow slideInLeft"
          data-wow-duration="2s"
          data-wow-delay="5s"
        >
          <div className="relative bg-black bg-opacity-90 p-6 text-white ">
            <div className="container mx-auto p-6">
              <div className="flex flex-col md:flex-row items-center p-6">
                <div className="md:w-1/2 md:pr-8">
                  <h1 className="text-xl font-bold mb-4 text-sky-300">
                    About Me
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                    Professional{" "}
                    <span className="text-sky-300">Problem Solutions</span> For
                    Digital Products
                  </h2>
                  <p className="text-gray-200 mb-6 text-justify">
                    At vero eos et accusamus et odio dignissimos ducimus
                    praesentium voluptatum corrupti quos dolores quas molestias
                    excepturi sint occaecati cupiditate provident qui officia
                    deserunt mollitia animi, id est laborum et dolorum.
                  </p>

                  <div className="flex gap-2">
                    <div className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                      <a href={tiktok} className="text-center w-40">
                        <FontAwesomeIcon
                          icon={faTiktok}
                          className="w-1/2 text-sky-500"
                          style={{ margin: "auto" }}
                        />
                      </a>
                    </div>

                    <div className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                      <a href={Facebook} className="text-center w-40">
                        <FontAwesomeIcon
                          icon={faFacebook}
                          className="w-1/2 text-sky-500"
                          style={{ margin: "auto" }}
                        />
                      </a>
                    </div>

                    <div className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                      <a href={twitter} className="text-center w-40">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="w-1/2 text-sky-500"
                          style={{ margin: "auto" }}
                        />
                      </a>
                    </div>

                    <div className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center mr-2 border-2 border-gray-300">
                      <a href={Instagram} className="text-center w-40">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="w-1/2 text-sky-500"
                          style={{ margin: "auto" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 w-full md:mx-28 mt-6 md:mt-0">
                  <Image
                    src={Image1}
                    alt="About Me Image"
                    className="shadow-lg"
                    layout="responsive"
                    width={500} // Adjust this according to your preference
                    height={500} // Adjust this according to your preference
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Page;
