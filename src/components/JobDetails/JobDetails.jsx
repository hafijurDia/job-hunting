import React, { useState } from "react";
import Footer from "../Footer/Footer";

import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const job = useLoaderData();
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  const addToCart = (job) => {
    let newJob = [...jobs, job];
    setJobs(newJob);
    addToDb(job.id);
    
}


  return (
    <>
     <Banner></Banner>
      <section className="py-20">
        <div className="container mx-auto md:flex flex-row gap-5">
          <div className="basis-2/3">
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Job Description: </span>{job.job_description}
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Job Responsibility: </span>{job.job_responsibility}
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">
                Educational Requirement:
              </span>
            </p>
            <p className="text-lg text-[#757575] pb-5">
              {job.educational_requirements}
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Experiences: </span>
            </p>
            <p className="text-lg text-[#757575] pb-5">
              {job.experiences}
            </p>
          </div>
          <div className="basis-1/3 bg-[#f9f8ff] rounded-lg p-8">
            <div className="grid grid-cols-1 divide-y">
              <div>
                <p className="text-2xl text-[#757575] pb-5">
                  <span className="text-black font-bold">Job Details</span>
                </p>
              </div>
              <div className="pt-5">
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">icon Salary: </span>
                  {job.salary}
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">Job Title: </span>
                  {job.job_title}
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-2xl text-black font-bold">
                    Contact Information
                  </span>
                </p>
              </div>
              <div className="pt-5">
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">icon Phone: </span>
                  {job.contact_information.phone}
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">Job Email: </span>{" "}
                  {job.contact_information.email}
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">icon Address: </span>
                  {job.contact_information.address}
                </p>
              </div>
            </div>
            <button onClick={() => addToCart(job)} className="block w-full bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
              Star Applying
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default JobDetails;
