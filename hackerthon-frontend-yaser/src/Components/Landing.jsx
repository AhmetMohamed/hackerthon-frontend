import React from "react";
import centIcon from "../Assets/centerIcon.svg";

const Landing = () => {
  return (
    <div class="bg-[url('./Assets/landingBG.jpg')] w-full h-fit pb-10 md:h-screen">
      <div className="md:flex items-center gap-60 p-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            Ku Tabaruc Geed
          </h1>
          <h3 className="md:font-medium text-4xl text-white">
            Ama Dib u Warshadayn Samee
          </h3>
        </div>
        <div className="w-20 h-20 mt-8">
          <img src={centIcon} alt="" />
        </div>
      </div>
      <div className="mx-20 w-80  text-gray-400">
        <p>
          Lorem ipsum dolor sit amet consectetur enim optio eius veritatis
          fugiat eum adipisci, odit sapiente in quaerat, Dignissimos, illum
          ullam?
        </p>
      </div>
    </div>
  );
};

export default Landing;
