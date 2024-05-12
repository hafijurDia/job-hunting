import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import companyPic from "../../../public/images/company-icon/google-1-1 1.png"
import Footer from '../Footer/Footer'
import { useLoaderData, Link } from 'react-router-dom'

export default function AppliedJob() {
  const savedCart = useLoaderData();
  const [jobs, setJobs] = useState(savedCart);
  const [filter, setFilter] = useState('');

  const handleSelectChange = (event) => {
    const filterItem = event.target.value;
    setFilter(filterItem);
  };
  const filteredJobs = filter ? jobs.filter(job => job.remote_or_onsite === filter) : jobs;
  const pageTitle = "Applied Job";

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  
  return (
    <>
      <Banner pageTitle={pageTitle} />
      <section className='pt-20'>
        <div className="container mx-auto flex justify-end mb-10">
          <select onChange={handleSelectChange} id="jobs" className="border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-32 text-lg bg-slate-100">
            <option value="">Filter</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
        <div className="container mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <div key={job.id} className="md:flex justify-center items-center gap-5 border rounded-lg p-10 mb-10">
                <div className="basis-2/12">
                  <div className='h-full'>
                    <img src={job.logo} alt="" />
                  </div>
                </div>
                <div className="basis-10/12 "> 
                  <div className="md:flex justify-between items-center">
                    <div>
                      <h5 className="text-2xl font-bold mb-2 text-[#474747]">{job.job_title}</h5>
                      <p className="text-xl font-semibold text-[#757575]">{job.company_name}</p>
                      <ul className="list-none my-6">
                        <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">{job.remote_or_onsite}</li>
                      </ul>
                      <p className="text-xl font-semibold text-[#757575]">
                        <span>Icon: {job.contact_information.address}</span>{" "}
                        <span>Icon: Salary: {job.salary}</span>
                      </p>
                    </div>
                    <div>
                      <Link to={`jobdetails/${job.id}`}>
                        <button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600 mt-5">No jobs match the selected filter.</div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}