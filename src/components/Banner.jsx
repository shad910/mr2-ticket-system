import React from "react";

const Banner = ({ progress, resolved }) => {
  return (
    <div>
      <div className="lg:flex gap-6 space-y-6 lg:space-y-0">

        {/* In Progress Card */}
        <div className="flex-1 card relative text-white shadow-xl overflow-hidden rounded-lg">
        
          <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-indigo-500 opacity-80"></div>

          <div
            className="absolute inset-0 bg-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/ZpWh1tM5/vector1.png')" }}
          ></div>
 
          <div className="relative card-body flex flex-col items-center justify-center text-center py-10">
            <h3 className="text-lg opacity-90">In-Progress</h3>
            <p className="text-4xl font-bold">{progress || 0}</p>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="flex-1 card relative text-white shadow-xl overflow-hidden rounded-lg">
    
          <div className="absolute inset-0 bg-linear-to-r from-green-500 to-teal-600 opacity-80"></div>

          <div
            className="absolute inset-0 bg-center"
            style={{ backgroundImage: "url('https://i.ibb.co.com/ZpWh1tM5/vector1.png')" }}
          ></div>

          <div className="relative card-body flex flex-col items-center justify-center text-center py-10">
            <h3 className="text-lg opacity-90">Resolved</h3>
            <p className="text-4xl font-bold">{resolved || 0}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;