import React from "react";
import tree from "../Assets/treeIcon.svg";
import recycle from "../Assets/recycleIcon.svg";

const Services = () => {
  return (
    <div className="" id="service">
      <h1 className="font-extrabold text-5xl md:text-7xl text-white text-center my-32">
        Our Services
      </h1>
      <div className="md:flex items-center justify-center md:gap-32 md:mx-32 mx-10">
        <div className="flex items-center gap-5 mb-10">
          <img src={tree} alt="" className="mb-5" />
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            majority have suffered alteration in some form,
          </p>
        </div>
        <div className="flex items-center gap-5 mb-10">
          <img src={recycle} alt="" className="mb-5" />
          <p className="text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            majority have suffered alteration in some form,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
