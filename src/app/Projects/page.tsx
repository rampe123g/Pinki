import Image from "next/image";
import project1 from "../../../public/project1.jpg";
import project2 from "../../../public/project2.jpg";
import project3 from "../../../public/project3.jpg";
import project4 from "../../../public/project4.jpg";

const AboutSection = () => {
  return (
    <>
      <section className="relative bg-black text-white">
        <div className="text-center justify-center">
          <div className="">
            <div className="text-center md:text-center p-8  md:px-24">
              <p className="font-semibold p-2 mt-10 md:text-2xl">
                Latest Works
              </p>
              <hr className="md:text-center h-1 mt-3 mb-3 w-12 md:w-20 mx-auto" />
              <p className="text-3xl m-2 font-semibold p-2 md:text-3xl">
                Explore My Popular{" "}
                <span className="text-sky-400">Projects</span>
              </p>
            </div>
          </div>
        </div>

        <section id="about" className="bg-black overflow-hidden">
          <div className="container mx-auto flex flex-col-reverse items-center sm:flex-row ">
            {/* <!-- Left Side: Big Image --> */}
            <div className="w-full sm:w-1/2 p-4 sm:p-0 order-2 sm:order-1 md:pt-10 md:px-10">
              <Image
                src={project1}
                width={600}
                height={300}
                alt="About Us"
                className="max-w-full max-h-96"
              />
            </div>
            {/* <!-- Right Side: Heading and Paragraph --> */}
            <div className="w-full sm:w-1/2 order-1 sm:order-2 sm:px-8 px-6 relative md:mt-20 mt-8 mb-6">
              <h1 className="font-bold pb-6 text-sky-400">Product Design</h1>
              <p className="text-5xl font-medium">Mobile Application Design</p>
              <div className="pb-6 pt-6 relative">
                <p className="pb-6 mb-6">
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis...
                  <span className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-2 absolute bg-white rounded-full p-3 bottom-0 left-0">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className=" bg-black overflow-hidden">
          <div className="container mx-auto flex flex-col-reverse items-center sm:flex-row ">
            {/* <!-- Left Side: Heading and Paragraph --> */}
            <div className="w-full sm:w-1/2 order-1 sm:order-2 sm:px-8 px-6 relative  md:mt-20 mt-8 mb-6">
              <h1 className="font-bold pb-6 text-sky-400">Product Design</h1>
              <p className="text-5xl font-medium">Website Makeup Design</p>
              <div className="pb-6 pt-6 relative">
                <p className="pb-6 mb-6">
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis...
                  <span className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-2 absolute bg-white rounded-full p-3 bottom-0 left-0">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>

            {/* <!-- Right Side: Big Image --> */}
            <div className="w-full sm:w-1/2 p-4 sm:p-0 order-1 sm:order-2 md:pt-24 md:px-10">
              <Image
                src={project2}
                width={600}
                height={300}
                alt=""
                className="max-w-full max-h-96"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-black overflow-hidden ">
          <div className="container mx-auto flex flex-col-reverse items-center sm:flex-row ">
            {/* <!-- Left Side: Big Image --> */}
            <div className="w-full sm:w-1/2 p-4 sm:p-0 order-2 sm:order-1 md:pt-24 md:px-10">
              <Image
                src={project3}
                width={600}
                height={300}
                alt="About Us"
                className="max-w-full max-h-96"
              />
            </div>

            {/* <!-- Right Side: Heading and Paragraph --> */}

            <div className="w-full sm:w-1/2 order-1 sm:order-2 sm:px-8 px-6 md:mt-20 mt-8 mb-6 relative">
              <h1 className="font-bold pb-6 text-sky-400">Design & Branding</h1>
              <p className="text-5xl font-medium">
                Brand Identity and Motion Design
              </p>
              <div className="pb-6 pt-6 relative">
                <p className="pb-6 mb-6">
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis...
                  <span className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-2 absolute bg-white rounded-full p-3 bottom-0 left-0">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className=" bg-black overflow-hidden">
          <div className="container mx-auto flex flex-col-reverse items-center sm:flex-row ">
            {/* <!-- Left Side: Heading and Paragraph --> */}
            <div className="w-full sm:w-1/2 order-1 sm:order-2 sm:px-8 px-6 relative md:mt-20 mt-8 mb-6">
              <h1 className="font-bold pb-6 text-sky-400 ">Product Design</h1>
              <p className="text-5xl font-medium">Website Makeup Design</p>
              <div className="pb-6 pt-6 relative">
                <p className="pb-6 mb-6">
                  Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                  inventore veritatis...
                  <span className="transform scale-105 shadow-box hover:-translate-y-2 transition-transform cursor-pointer border-2 border-gray-300 mb-2 absolute bg-white rounded-full p-3 bottom-0 left-0">
                    <svg
                      className="w-6 h-6 text-sky-400 -rotate-45 cursor-pointer"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M12 5l7 7-7 7"
                      ></path>
                    </svg>
                  </span>
                </p>
              </div>
            </div>

            {/* <!-- Right Side: Big Image --> */}
            <div className="w-full sm:w-1/2 p-4 sm:p-0 order-1 sm:order-2 md:pt-24 md:px-10">
              <Image
                src={project4}
                width={600}
                height={300}
                alt=""
                className="max-w-full max-h-96"
              />
            </div>
          </div>
          <p className="mb-28"></p>
        </section>
      </section>
    </>
  );
};

export default AboutSection;
