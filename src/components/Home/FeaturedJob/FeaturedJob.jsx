import React, { useEffect, useState } from "react";
import google from "../../../../public/images/company-icon/google-1-1 1.png";
import { Link } from "react-router-dom";
import JobDetails from "../../JobDetails/JobDetails";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDollarSign,faSquarePhone,faEnvelope,faLocationDot,faBriefcase} from '@fortawesome/free-solid-svg-icons';

const FeaturedJob = (Props) => {
  const jobs = Props.jobs;
  const [showAllJobs, setShowAllJobs] = useState(false);
  const jobsToShow = showAllJobs ? jobs : jobs.slice(0,4);
  
  const handleShowMore = () => {
    setShowAllJobs(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  
  return (
    <>
    <div className="container mx-auto md:grid grid-cols-2 gap-5">

      {
        jobsToShow.map(job => 
          <div key={job.id} className="basis-2/4 rounded-lg p-10 border">
      <div className="icon">
        <img src={job.logo} alt="" />
      </div>
      <div className="mt-8">
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
          <span className="mr-5"><FontAwesomeIcon className="text-[#8b82ffa6]" icon={faLocationDot} /> {job.location} </span> 
          <span><FontAwesomeIcon className="text-[#8b82ffa6]" icon={faDollarSign} /> Salary: {job.salary}</span>
        </p>
        <Link to={`jobdetails/${job.id}`}><button className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-2 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
          View Details
        </button></Link>
      </div>
    </div>
        )
      }
  
  </div>
  <div className="container mx-auto">
    <div className="w-100 text-center py-10">
    <button onClick={() => handleShowMore()} className="bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold">
          See All Jobs
        </button>
    </div>
    </div>
 
</>
  );
};

export default FeaturedJob;
