import React from "react";
import aboutimg from "../Assets/aboutImage.png";
import eye from "../Assets/eye.svg";
import charity from "../Assets/charity.svg";

const About = () => {
  return (
    <div className="" id="about">
      <div className="md:flex md:items-center md:justify-center md:gap-32 mt-36 space-y-10 p-10">
        <div className="md:w-96">
          <img src={aboutimg} alt="" srcset="" />
        </div>
        <div>
          <h1 className="font-extrabold md:text-7xl text-5xl md:text-left text-center text-white">
            About Us
          </h1>
          <p className="text-gray-400 my-5">
            There are many variations of passages of Lorem Ipsum
            <br />
            majority have suffered alteration in some form, by injected humor,
            or randomized. There <br />
            are many variations of passages of Lorem Ipsum available, but
            majority have <br />
            suffered alteration in some form, by injected humor, or randomized.
          </p>
          <div>
            <div className="flex items-center gap-5 mb-5">
              <img src={eye} alt="eye icon" />
              <p className="text-gray-400">
                There are many variations of passages of Lorem Ipsum <br />
                available, but majority have suffered alteration in some form,
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={charity} alt="eye icon" />
            <p className="text-gray-400">
              There are many variations of passages of Lorem Ipsum <br />
              available, but majority have suffered alteration in some form,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
