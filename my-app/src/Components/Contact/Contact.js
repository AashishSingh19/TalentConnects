import React from "react";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdGpsFixed } from "react-icons/md";

function Contact() {
  return (
    <div className="flex flex-col items-center px-5 max-w-screen-xl mx-auto mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-center text-black mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
        <div className="bg-gray-100 rounded-lg p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <IoIosCall className="text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-semibold">PHONE :</h3>
                <p className="text-lg text-gray-800">+977-9801850670 , +977-9801850670</p>
              </div>
            </div>
            <div className="flex items-center mb-6">
              <CiMail className="text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-semibold">EMAIL :</h3>
                <p className="text-lg text-gray-800">gip@talentconnects.com.np</p>
              </div>
            </div>
            <div className="flex items-center">
              <MdGpsFixed className="text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-semibold">ADDRESS :</h3>
                <p className="text-lg text-gray-800">Ekantakuna, Lalitpur, 44600</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 md:p-10">
          <p className="text-xl text-gray-800">
            Have questions or need more information? Reach out to our dedicated team. We're here to help you navigate your journey to international professional growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
