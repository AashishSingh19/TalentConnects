import React from 'react';
import Image from '../../Assets/2.png'

function Intern() {
    return (
      <div className="flex flex-col px-5">
        <div className="self-center text-4xl font-semibold text-center mt-20 text-black max-md:max-w-full">
          Global Internship Programme
        </div>
        <div className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full">
                <div className="text-4xl font-semibold text-center max-md:max-w-full">
                  Eligiliblity Criteria
                </div>
                <div className="mt-5 text-xl max-md:max-w-full">
                  Are you an enthusiastic individual looking to set up your
                  professional life on a global scale? The Global Internship
                  Programme by Talent Connects Company is the perfect opportunity
                  for you. To be eligible for this exciting program, you must meet
                  the following criteria:
                  <br />
                  Undergraduate/Masters result awaiting (not more than 6 months
                  from graduation)
                  <br />
                  Passionate about the field of study or interest
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={Image}
                className="grow w-full aspect-[1.64] max-md:mt-10 max-md:max-w-full"
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Intern;