import React from 'react';
import aboutUs from '../../Assets/about-us2.jpg'

function AboutUs() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-40">
        <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={aboutUs}
            className="grow w-full aspect-[1.56] max-md:mt-10 max-md:max-w-full"
            alt='About Us'
          />
        </div>
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-10">
            <div className="self-center text-4xl font-semibold text-center">
              About Us
            </div>
            <div className="mt-7 text-xl">
              In the year 2019, Talent Connects Company embarked on a mission to
              revolutionize HR approaches and redefine recruitment processes.
              With a focus on aligning candidates with the vision and mission of
              organizations, Talent Connects has evolved into a leading HR
              company with over 5 years of experience. Our unique selling
              proposition (USP) lies in our state-of-the-art 'cloud-based HR
              software.' This all-in-one solution empowers organizations to
              streamline their HR operations efficiently, all from a single
              integrated system.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
