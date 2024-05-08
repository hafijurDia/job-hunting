/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css'
import HeroSection from './HeroSection/HeroSection';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJob from './FeaturedJob/FeaturedJob';
import Footer from '../Footer/Footer';



export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
    <JobCategory></JobCategory>
    <FeaturedJob></FeaturedJob>
    <Footer></Footer>
    </>
    
  )
}

