import React from "react";

const Footer = () => {
  return (
    <section className="w-100 bg-[#1A1919] py-20">
      <div className="container mx-auto md:flex flex-row gap-5">
        <div className="basis-2/6">
          <div className="mt-8">
            <h5 className="text-4xl font-bold mb-2 text-[#f9f8ff]">JobHunting</h5>
            <p className="text-base text-white  text-opacity-70">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            
          </div>
        </div>
        <div className="basis-1/6">
          <div className="mt-8">
            <h5 className="text-xl font-bold mb-2 text-[#f9f8ff]">Company</h5>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Work</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">About Us</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Latest News</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Careers</a>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="mt-8">
            <h5 className="text-xl font-bold mb-2 text-[#f9f8ff]">Product</h5>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Prototype</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Plans & Pricing</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Customers</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Integrations</a>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="mt-8">
            <h5 className="text-xl font-bold mb-2 text-[#f9f8ff]">Support</h5>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Help Desk</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Sales</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Become a Partner</a>
            <a href="#" className="text-base text-white  text-opacity-70 block py-2">Developers</a>
          </div>
        </div>
        <div className="basis-1/6">
          <div className="mt-8">
            <h5 className="text-xl font-bold mb-2 text-[#f9f8ff]">Contact</h5>
            <p className="text-base text-white  text-opacity-70 py-2">524 Broadway , NYC</p>
            <p className="text-base text-white  text-opacity-70 py-2">+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-10">
        <div className="border-t border-white border-opacity-50">
        <p className="text-base text-white  text-opacity-70 pt-6">@2023 CareerHub. All Rights Reserved</p>
        </div>
      
      </div>
    </section>
  );
};

export default Footer;
