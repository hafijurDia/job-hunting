import React, { useEffect, useState } from "react";

import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3335/jobs')
    .then(res => res.json())
    .then(data => setJobs(data));
  },[])

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
      <FeaturedJob
      key={jobs.id}
      jobs={jobs}
      ></FeaturedJob>
    </section>
  );
};

export default FeaturedJobs;
