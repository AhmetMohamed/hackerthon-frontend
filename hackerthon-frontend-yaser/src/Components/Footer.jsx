import React from "react";

function Footer() {
  return (
    <div className="w-[100%] md:h-[29vh] h-80 bg-footer-pg bg-no-repeat bg-cover font-poppins">
      <div className="w-[100%] md:h-[100%] h-[70%] md:translate-y-7 translate-y-20 flex md:flex-row flex-col justify-evenly items-center px-10 text-white underline md:text-lg text-sm">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">random@email.com</h2>
          <h2 className="p-1">random@email.com</h2>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">773827128</h2>
          <h2 className="p-1">84219198</h2>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h2 className="p-1">Jigjiga yar</h2>
          <h2 className="p-1">Hargeisa | Somaliland</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
