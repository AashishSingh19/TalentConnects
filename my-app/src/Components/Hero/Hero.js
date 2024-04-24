import React from 'react';
import aboutUs from "../../Assets/file.png"

function Hero() {
    return (
      <div>
        <div className="mt-20 bg-gradient-to-b from-cyan-600 to-blue-600 flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto font-semibold text-center text-white max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl max-md:max-w-full max-md:text-4xl">
                Talent Connects
                <br />
                Global Internship Programme
              </div>
              <button className="self-center md:curson-pointer px-11 pt-5 pb-8 mt-20 text-lg bg-slate-600 rounded-[32px] max-md:px-5 max-md:mt-10">
                Apply Now
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={aboutUs}
              className="grow w-full aspect-[1.14] max-md:mt-10 max-md:max-w-full"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    );
  }
  export default Hero;