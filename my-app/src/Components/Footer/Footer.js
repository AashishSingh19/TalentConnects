import React from "react";
import Image from '../../Assets/footer-bg.png';
import Logo from '../../Assets/footer-logo.png';

function Footer() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[527px] max-md:px-5">
      <img
        loading="lazy"
        img={Image}
        alt=""
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ea9a39d7ba532e108ed65d05e4c39b34becfdb55e7164ada0b864f9def330c?apiKey=a69932bc804e4584a2985510d4e92b5f&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative mt-12 w-full max-w-[982px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
            <div className="relative grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col text-base text-white max-md:mt-10">
                    <img
                      loading="lazy"
                      img={Logo}
                      alt=""
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cbdf69f8e36479fc525e66f35436f36868671ef886e0abe6718b707153d481a3?apiKey=a69932bc804e4584a2985510d4e92b5f&"
                      className="max-w-full aspect-[3.45] w-[163px]"
                    />
                    <div className="mt-6">
                      Talent Connects was established in February 2019 with the
                      vision to bridge the skilled employees with the right
                      jobs.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col justify-center items-center px-1 w-full text-xl font-medium text-white aspect-square max-md:mt-10">
                    <div className="items-start px-3 pt-3.5 pb-16 max-md:pr-5">
                      Category
                      <br />
                      <br />
                      <span className="text-base">&gt;ATS Solution</span>
                      <br />
                      <span className="text-base">&gt;CV Builder</span>
                      <br />
                      <span className="text-base">&gt;Find Salaries</span>
                      <br />
                      <span className="text-base">&gt;Talent Pool</span>
                      <br />
                      <span className="text-base">&gt;Privacy Policy</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
                  <div className="relative mt-3 text-xl font-medium text-white max-md:mt-10">
                    Quick Links
                    <br />
                    <br />
                    <span className="text-base">&gt;Career</span>
                    <br />
                    <span className="text-base">&gt;Training</span>
                    <br />
                    <span className="text-base">&gt;Blogs</span>
                    <br />
                    <span className="text-base">&gt;Employer</span>
                    <br />
                    <span className="text-base">&gt;Jobseeker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative gap-2.5 mt-3.5 max-md:mt-10">
              <div className="flex flex-col items-center self-end mt-12 max-md:mt-10">
              </div>
              <div className="text-xl font-medium text-white underline">
                Find Us
                <br />
                <br />
                <a
                  href="tel:9801850670"
                  className="text-base underline "
                >
                  9801850670
                </a>
                <br />
                <span className="text-base ">
                  Ekantakuna , Lalitpur , 44600
                </span>
                <br />
                <a
                  href="mailto:info@talentconnects.com.np"
                  className="text-base underline "
                >
                  info@talentconnects.com.np
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;

