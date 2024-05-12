import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';

const pageTitle = "Blog";
export default function Blog() {
  return (
    <>
      <Banner pageTitle={pageTitle}></Banner>
      <section className='py-20'>
        <div className="container mx-auto">
          <p className="text-lg text-[#757575] pb-5"><span className="text-black font-bold">Job Description: </span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
          
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}
