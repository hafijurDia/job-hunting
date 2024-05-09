import React from "react";
import Footer from "../Footer/Footer";

import Banner from "../Banner/Banner";

const JobDetails = () => {
  return (
    <>
     <Banner></Banner>
      <section className="py-20">
        <div className="container mx-auto md:flex flex-row gap-5">
          <div className="basis-2/3">
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Job Description: </span>A
              UI/UX (User Interface/User Experience) designer is responsible for
              designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Job Description: </span>A
              UI/UX (User Interface/User Experience) designer is responsible for
              designing and creating engaging and effective interfaces for
              software and web applications. This includes designing the layout,
              visual design, and interactivity of the user interface.
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">
                Educational Requirement:{" "}
              </span>
            </p>
            <p className="text-lg text-[#757575] pb-5">
              Bachelor degree to complete any reputational university.
            </p>
            <p className="text-lg text-[#757575] pb-5">
              <span className="text-black font-bold">Experiences: </span>
            </p>
            <p className="text-lg text-[#757575] pb-5">
              2-3 Years in this field.
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
                  100K - 150K (Per Month)
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">Job Title: </span>{" "}
                  Product Designer
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
                  01750-00 00 00
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">Job Email: </span>{" "}
                  info@gmail.com
                </p>
                <p className="text-lg text-[#757575] pb-5">
                  <span className="text-black font-bold">icon Address: </span>
                  Dhanmondi 32, Sukrabad Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <button className="block w-full bg-gradient-to-r bg-[#7E90FE] bg-[#7450d5] text-white px-4 p-4 rounded-md hover:bg-blue-600 text-xl font-bold mt-5">
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
