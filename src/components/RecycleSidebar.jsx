import React, { useState } from "react";
import monetization from "../Assets/monetization.svg";
import logout from "../Assets/logout.svg";
import optIcon from "../Assets/optIcon.svg";
import updateIcon from "../Assets/updateIcon.svg";
import Tick from "../Assets/Tick.svg";

const RecycleSidebar = () => {
  const [goob, setGoob] = useState("");
  const [cabir, setCabir] = useState();
  const [paid, setPaid] = useState({});
  console.log(paid);
  const pay = () => {
    if (window.confirm("mahubtaa?") == true && goob != "") {
      setPaid({ goob, cabir });
    }
  };

  return (
    <div className="w-80 h-screen bg-primary">
      <div className="p-10">
        <div className="">
          <select
            type="text"
            id="default-input"
            className="bg-teritary outline-none text-black font-semibold text-sm rounded-lg  block w-full p-3 mb-3"
            value={goob}
            onChange={(e) => {
              setGoob(e.target.value);
            }}
          >
            <option value="">Dooro Goobta</option>
            <option value="Koodbuur">Koodbuur</option>
            <option value="Gacan Libaax">Gacan libaax</option>
            <option value="June">26 June</option>
          </select>
        </div>
        <div className="">
          <input
            type="text"
            id="default-input"
            className="bg-teritary outline-none text-black text-sm rounded-lg  block w-full p-3"
            placeholder="Tirada Misaanka"
            value={cabir}
            onChange={(e) => {
              setCabir(e.target.value);
            }}
          />
        </div>
        <button
          className="p-2.5 w-full rounded mt-5 bg-secondary text-white"
          onClick={pay}
        >
          Confirm
        </button>
      </div>
      <div className="p-10">
        <div className="flex items-center gap-4 mb-8">
          <img src={monetization} alt="" srcSet="" />
          <p className="text-white underline">Monetization</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <img src={optIcon} alt="" srcSet="" />
          <p className="text-white underline">Option</p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <img src={monetization} alt="" srcSet="" />
          <p className="text-white underline">Money</p>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <img src={Tick} alt="" srcSet="" />
          <p className="text-white underline">Info</p>
        </div>
        <div className="flex items-center gap-4 ">
          <img src={logout} alt="" srcSet="" />
          <p className="text-white underline">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default RecycleSidebar;
