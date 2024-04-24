import * as React from "react";
import Image from "../../Assets/internship2-getty.jpg"
import { GoDotFill } from "react-icons/go";

function Join() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 font-semibold text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl max-md:max-w-full">
              How To Apply
            </div>
            <div className="mt-5 text-xl max-md:max-w-full">
              Ready to take the next step in your career journey? Follow these
              simple steps to apply for the International Internship Programme:
              <div class="bg-gray-200 p-4">
    <div class="mt-4 text-left text-sm">
        <div class="mb-4">
            <span class="border-b border-gray-400">1. FILL OUT THE APPLICATION FORM</span><br/>
            Provide us with your basic information, educational background, and a brief statement of interest.
        </div>
        <hr class="my-4 border-gray-400"/>
        <div class="mb-4">
            <span class="border-b border-gray-400">2. SUBMIT RELEVANT DOCUMENTS</span><br/>
            Upload your resume, academic transcripts, and any other supporting documents.
        </div>
        <hr class="my-4 border-gray-400"/>
        <div className="mb-4">
      <span className="border-b border-gray-400">4. PAYMENT AND VISA PROCEDURE</span><br />
          <div className="ml-4">
            <div className="flex items-start mb-4">
               <GoDotFill className="text-gray-500 mt-1 mr-2 text-lg" />
                  <div>
                    <p className="text-xs">Payment Information: Successful candidates are required to make a payment to secure their spot in the internship programme. This fee covers administrative costs, support services, and various resources provided during the internship.</p>
                    </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <GoDotFill className="text-gray-500 mt-1 mr-2 text-lg" />
                      <div>
                        <p className="text-xs">Visa Assistance: Our team will assist you in navigating the visa application process. We understand the complexities of international travel and will provide guidance to ensure a smooth visa application experience. Please note that visa fees and any associated costs are the responsibility of the applicant.</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4">
                      <GoDotFill className="text-gray-500 mt-1 mr-2 text-lg" />
                      <div>
                        <p className="text-xs">Financial Support Options: Talent Connects Company understands that the financial aspect of an international internship can be a concern. We are committed to providing information on potential financial support options, scholarships, or resources that may assist you during this exciting journey.</p>
                      </div>
                    </div>
                  </div>
                </div>
                    <hr class="my-4 border-gray-400"/>
                    <div>
                        <span class="border-b border-gray-400">5. ACCEPTANCE</span><br/>
                        Congratulations! Successful candidates will receive an offer to join the Talent Connects Company International Internship Programme.
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            alt="" srcSet={Image}
            className="grow w-full aspect-[1.22] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
export default Join;
