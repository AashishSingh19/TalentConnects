import React from "react";

function Benefits() {
  return (
    <div className="flex flex-col items-center px-6 pt-12 pb-20 mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-center text-black mb-12">
        Benefits of Joining
      </h2>
      <div className="grid grid-cols-1 gap-10 max-w-6xl md:grid-cols-3 md:gap-8">
        <div className="flex flex-col items-center justify-center px-8 py-10 bg-sky-100 border border-black rounded-lg">
          <h3 className="text-xl font-medium mb-6">Real Exposure</h3>
          <p className="text-lg text-center">
            Gain hands-on experience in a real-world working environment,
            contributing to your professional development.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-10 bg-blue-100 border border-black rounded-lg">
          <h3 className="text-xl font-medium mb-6">International Internship</h3>
          <p className="text-lg text-center">
            Immerse yourself in a cross-cultural experience, working with
            diverse teams and expanding your global perspective.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-8 py-10 bg-blue-300 border border-black rounded-lg">
          <h3 className="text-xl font-medium mb-6">Cultural Awareness</h3>
          <p className="text-lg text-center">
            Develop cultural sensitivity and understanding by working in an
            international setting, fostering a well-rounded professional outlook.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
