import React, { useEffect, useState } from 'react';
import JobCategory from '../JobCategory/JobCategory';


const JobCategories = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch('../../../public/data/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
},[]);

    return (
      <>
        <section className="w-100 mt-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-1">Job Category List</h2>
            <p className="my-6 text-lg text-[#757575] mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
        </div>
        <JobCategory
        key={categories.id}
        categories={categories}
        ></JobCategory>
       </section>
       
        </>
    );
};

export default JobCategories;