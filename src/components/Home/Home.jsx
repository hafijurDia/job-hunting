/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Home.css";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedJob from "./FeaturedJob/FeaturedJob";
import Footer from "../Footer/Footer";
import { json } from "react-router-dom";
import JobCategories from "./JobCategories/JobCategories";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";


export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <JobCategories></JobCategories>
      <FeaturedJobs></FeaturedJobs>
      <Footer></Footer>
    </>
  );
}
