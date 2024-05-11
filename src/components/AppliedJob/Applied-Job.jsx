import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import companyPic from "../../../public/images/company-icon/google-1-1 1.png"
import Footer from '../Footer/Footer'
import { useLoaderData, Link } from 'react-router-dom'

export default function AppliedJob() {
  const savedCart = useLoaderData();
  const [jobs, setJobs] = useState(savedCart);

  return (
    <>
      <Banner></Banner>
      <section className='pt-20'>
        <div className="container mx-auto">

          {
            jobs.map(job=>
              <div key={job.id} className="md:flex justify-center items-center gap-5 border rounded-lg p-10 mb-10">
              <div className="basis-2/12">
                <div className='h-full'>
                <img src={job.logo} alt="" />
                </div>
                  
              </div>
              <div className="basis-10/12 "> 
                  <div className="md:flex justify-between items-center">
                  <div>
                  <h5 className="text-2xl font-bold mb-2 text-[#474747]">
            {job.job_title}
          </h5>
          <p className="text-xl font-semibold text-[#757575]">{job.company_name}</p>
          <ul className="list-none my-6">
            <li className="text-base border border-blue-300 p-2 text-center rounded w-2/12 font-bold active inline mr-5">
              {job.remote_or_onsite}
            </li>

          </ul>
          <p className="text-xl font-semibold text-[#757575]">
            <span>Icon: {job.contact_information.address}</span>{" "}
            <span>Icon: Salary: {job.salary}</span>
          </p>
                  </div>
                  <div>
                  <Link to={`jobdetails/${job.id}`}><button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
            View Details
          </button></Link>
                  </div>
                  </div>
              </div>
          </div>
            )
          }
            
        </div>
    </section>
    <Footer></Footer>
    </>
  )
}
