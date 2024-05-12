import React,{useEffect} from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer';

const pageTitle = "Blog";
export default function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  
  return (
    <>
      <Banner pageTitle={pageTitle}></Banner>
      <section className='py-20'>
        <div className="container mx-auto">
          <p className="text-lg text-[#757575] pb-5"><span className="text-black font-bold">1. useRef: </span> useRef is a Hook in React that provides a way to create mutable references to elements or values that persist across renders without causing the component to re-render when the reference changes.</p>
          <ul className='list-disc w-100 pl-10 text-lg text-[#757575]'>
            <li>Accessing DOM elements: You can use useRef to access DOM elements directly, allowing you to manipulate them imperatively.</li>
            <li>Storing mutable values: You can store mutable values in a useRef object. Unlike state (useState), changing the value of a useRef object does not cause a re-render of the component.</li>
            <li>Preserving values between renders: useRef can be used to store values that need to persist between renders but don't trigger re-renders themselves.</li>
          </ul>

          <p className="text-lg text-[#757575] pb-5 mt-5"><span className="text-black font-bold">2. uesMemo: </span> 
useMemo is a Hook in React that is used for memoization. Memoization is an optimization technique used to improve the performance of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again.</p>
<p className="text-lg text-[#757575] pb-5">
In React, useMemo memoizes the result of a function and returns the cached result when the inputs (dependencies) to that function have not changed since the last render. It is particularly useful when you have a computationally expensive function that is called within a component, and you want to avoid re-computing its result on every render unless its dependencies change.</p>
       
   
          
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}
