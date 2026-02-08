import bannerPerson1 from "@/assets/images/person1.jpg"; // replace with your image
import bannerPerson2 from "@/assets/images/person2.jpg"; // replace with your image

import { FiArrowUpRight } from "react-icons/fi";


const Banner = () => {
  return (
    <div className="relative px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
          Transformative Technology for Tomorrow's Business
        </h1>
        <p className="text-gray-600 text-lg">
          We architect digital solutions that drive growth, efficiency, and innovation.
        </p>

        <button className="bg-brown text-navy-blue flex gap-2 items-center px-7 py-2 rounded-full font-semibold hover:bg-brown/90 transition">
          Services <div  className="text-xl"> <FiArrowUpRight /> </div>
        </button>

        {/* Quote */}
        <div className="bg-gray-100 p-6 rounded-lg mt-6">
          <p className="text-gray-800">
            <span className="text-4xl text-red-600 mr-2">&ldquo;</span>
            At Tanainent, we believe technology should serve humanity, not the other way around.
            Our mission is to create solutions that empower businesses to reach their fullest potential
            while making a positive impact on the world.
          </p>
          <p className="mt-4 font-semibold">- CEO, Tanainent</p>
        </div>
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 flex flex-col space-y-6 mt-10 lg:mt-0 lg:pl-12">
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <img src={bannerPerson1} alt="Tech Professional" className="w-20 h-20 object-cover rounded-lg"/>
          <div>
            <p className="text-2xl font-bold">30+</p>
            <p className="text-gray-600">Tech Professionals</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <img src={bannerPerson2} alt="Countries Served" className="w-20 h-20 object-cover rounded-lg"/>
          <div>
            <p className="text-2xl font-bold">10+</p>
            <p className="text-gray-600">Countries served</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
