import React from "react";
import image from "../../../../public/images/hero-image.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
      <section className="w-100 bg-[#f9f8ff]">
        <div className="container mx-auto sm:flex flex-row justify-center items-center h-screen">
          <div className="basis-1/2">
            <h1 className="hero-title text-7xl font-extrabold leading-1">
              <span>One Step</span> <span> Closer To Your</span>{" "}
              <span className="linear-color">Dream Job</span>
            </h1>
            <p className="my-8 text-lg text-[#757575] md:w-2/3">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
              Star Applying
            </button>
          </div>
          <div className="basis-1/2">
            <img className="" src={image} alt="My Image" />
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
