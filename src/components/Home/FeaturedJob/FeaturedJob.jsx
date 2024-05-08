import React from "react";
import google from "../../../../public/images/company-icon/google-1-1 1.png";

const FeaturedJob = () => {
  return (
    <section className="w-100 mt-20 mb-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold leading-1">Featured Jobs</h2>
          <p className="my-6 text-lg text-[#757575] mb-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
      <div className="container mx-auto md:grid grid-cols-2 gap-5">
        <div className="basis-2/4 rounded-lg p-10 border">
          <div className="icon">
            <img src={google} alt="" />
          </div>
          <div className="mt-8">
            <h5 className="text-2xl font-bold mb-2 text-[#474747]">
              Technical Database Engineer
            </h5>
            <p className="text-xl font-semibold text-[#757575]">Google LLC</p>
            <ul className="list-none my-6">
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Remote
              </li>
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Full Time
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#757575]">
              <span>Icon: Dhaka, Bangladesh</span>{" "}
              <span>Icon: Salary: 100K - 150K</span>
            </p>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-2 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
              View Details
            </button>
          </div>
        </div>
        <div className="basis-2/4 rounded-lg p-10 border">
          <div className="icon">
            <img src={google} alt="" />
          </div>
          <div className="mt-8">
            <h5 className="text-2xl font-bold mb-2 text-[#474747]">
              Technical Database Engineer
            </h5>
            <p className="text-xl font-semibold text-[#757575]">Google LLC</p>
            <ul className="list-none my-6">
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Remote
              </li>
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Full Time
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#757575]">
              <span>Icon: Dhaka, Bangladesh</span>{" "}
              <span>Icon: Salary: 100K - 150K</span>
            </p>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-2 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
              View Details
            </button>
          </div>
        </div>
        <div className="basis-2/4 rounded-lg p-10 border">
          <div className="icon">
            <img src={google} alt="" />
          </div>
          <div className="mt-8">
            <h5 className="text-2xl font-bold mb-2 text-[#474747]">
              Technical Database Engineer
            </h5>
            <p className="text-xl font-semibold text-[#757575]">Google LLC</p>
            <ul className="list-none my-6">
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Remote
              </li>
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Full Time
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#757575]">
              <span>Icon: Dhaka, Bangladesh</span>{" "}
              <span>Icon: Salary: 100K - 150K</span>
            </p>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-2 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
              View Details
            </button>
          </div>
        </div>
        <div className="basis-2/4 rounded-lg p-10 border">
          <div className="icon">
            <img src={google} alt="" />
          </div>
          <div className="mt-8">
            <h5 className="text-2xl font-bold mb-2 text-[#474747]">
              Technical Database Engineer
            </h5>
            <p className="text-xl font-semibold text-[#757575]">Google LLC</p>
            <ul className="list-none my-6">
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Remote
              </li>
              <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
                Full Time
              </li>
            </ul>
            <p className="text-xl font-semibold text-[#757575]">
              <span>Icon: Dhaka, Bangladesh</span>{" "}
              <span>Icon: Salary: 100K - 150K</span>
            </p>
            <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-2 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="w-100 text-center py-10">
        <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
              See All Jobs
            </button>
        </div>
     

      </div>
    </section>
  );
};

export default FeaturedJob;
