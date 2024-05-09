import React from "react";
import topAbsolute from "../../../public/images/subheader/3linetop.png";
import bottomAbsolute from "../../../public/images/subheader/3linebottom.png";
const Banner = () => {
  return (

    <section className="w-100 bg-[#f9f8ff] relative">
      <h3 className="text-3xl pt-52 pb-32 text-center font-bold">
        Job Details
      </h3>
      <img className="absolute top-0 right-0 z-10" src={topAbsolute} alt="" />
      <img
        className="absolute bottom-0 left-0 z-10"
        src={bottomAbsolute}
        alt=""
      />
    </section>

  );
};

export default Banner;
