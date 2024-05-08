import React from "react";
import accountIcon from '../../../../public/images/home-icon/accounts1.png';

const JobCategory = () => {
  return (
      <section className="w-100 mt-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-1">Job Category List</h2>
            <p className="my-6 text-lg text-[#757575] mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
        </div>
        <div className="container mx-auto md:flex flex-row gap-5">
            <div className="basis-1/4 bg-[#f9f8ff] rounded-lg p-10">
                <div className="icon bg-[#efecff] flex justify-center p-3 rounded-lg w-3/12">
                    <img src={accountIcon} alt="" />
                </div>
                <div className="mt-8">
                    <h5 className="text-xl font-bold mb-2">Account & Finance</h5>
                    <p className="text-base">300 Jobs Available</p>
                </div>
            </div>
            <div className="basis-1/4 bg-[#f9f8ff] rounded-lg p-10">
                <div className="icon bg-[#efecff] flex justify-center p-3 rounded-lg w-3/12">
                    <img src={accountIcon} alt="" />
                </div>
                <div className="mt-8">
                    <h5 className="text-xl font-bold mb-2">Account & Finance</h5>
                    <p className="text-base">300 Jobs Available</p>
                </div>
            </div>
            <div className="basis-1/4 bg-[#f9f8ff] rounded-lg p-10">
                <div className="icon bg-[#efecff] flex justify-center p-3 rounded-lg w-3/12">
                    <img src={accountIcon} alt="" />
                </div>
                <div className="mt-8">
                    <h5 className="text-xl font-bold mb-2">Account & Finance</h5>
                    <p className="text-base">300 Jobs Available</p>
                </div>
            </div>
            <div className="basis-1/4 bg-[#f9f8ff] rounded-lg p-10">
                <div className="icon bg-[#efecff] flex justify-center p-3 rounded-lg w-3/12">
                    <img src={accountIcon} alt="" />
                </div>
                <div className="mt-8">
                    <h5 className="text-xl font-bold mb-2">Account & Finance</h5>
                    <p className="text-base">300 Jobs Available</p>
                </div>
            </div>
        </div>
      </section>
  );
};

export default JobCategory;
