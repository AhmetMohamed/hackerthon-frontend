import React, { useState } from "react";
import Chart from "../Assets/Chart.png";
import Logout from "../Assets/logOutIcon.svg";
import Option from "../Assets/optionIcon.svg";
import Info from "../Assets/infoIcon.svg";
import MapImage from "../Assets/Map.png";

const SideBar = () => {
  const [magaalo, setMagaalo] = useState("");
  const [geed, setGeed] = useState("");
  const [number, setNumber] = useState("");
  const [donate, setDonate] = useState({});
  const plant = () => {
    if (
      window.confirm("mahubtaa inaad intaa uun aad beeraysid?") == true &&
      magaalo != "" &&
      geed != "" &&
      number != ""
    ) {
      setDonate({ magaalo, geed, number });
    }
  };
  return (
    <div className="">
      <div>
        <div className="bg-[#151712] flex flex-col gap-2 h-screen w-[335px] px-4 py-5">
          <div className="flex flex-col gap-3">
            <select
              name=""
              id=""
              className="w-full px-3 py-3 text-white  bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
              value={magaalo}
              onChange={(e) => {
                setMagaalo(e.target.value);
              }}
            >
              <option
                value=""
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Magaalada
              </option>
              <option
                value="Hargeisa"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Hargeisa
              </option>

              <option
                value="Burao"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Buroa
              </option>

              <option
                value="Erigavo"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Erigavo
              </option>
            </select>

            <select
              name=""
              id=""
              placeholder="Select Tree"
              className="w-full px-3 py-3 text-white  bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
              value={geed}
              onChange={(e) => {
                setGeed(e.target.value);
              }}
            >
              <option
                value=""
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Geedka
              </option>
              <option
                value="Orange"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Orange
              </option>

              <option
                value="apple"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Apple
              </option>

              <option
                value="mango"
                className="bg-[#669542] font-medium text-sm py-2"
              >
                Mango
              </option>
            </select>

            <input
              type="text"
              placeholder="Tirada"
              className="w-full px-3 text-white py-3 bg-[#BBD6A7]/30 rounded-lg text-sm font-medium"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />

            <button
              className="bg-[#669542] py-3 rounded-lg font-semibold text-sm mt-4"
              onClick={plant}
            >
              Confirm
            </button>
          </div>

          <div className="mt-8 text-gray-100">
            <div className="flex justify-between text-sm font-medium mt-9">
              <p>Completed</p>
              <p>
                <span className="text-[#669542]">230</span> / 550
              </p>
            </div>

            <div className="mt-5 relative">
              <div className="bg-[#777] h-2 w-full rounded-xl"></div>
              <div className="bg-[#669542] h-2 w-32 rounded-xl absolute bottom-0"></div>
            </div>
          </div>

          <div className="flex items-center gap-7 mt-14 text-gray-100">
            <div>
              <img
                src={Chart}
                alt="chart"
                className=""
                width="135px"
                height="auto"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 bg-orange-500"></div>
                <p>Orange</p>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 bg-indigo-600 "></div>
                <p>Apple</p>
              </div>

              <div className="flex items-center gap-3 text-sm font-medium">
                <div className="w-3 h-3 rounded-xs bg-green-600 "></div>
                <p>Mango</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-16 cursor-pointer text-gray-100">
            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Logout} alt="logout" width="16" height="auto" />
              <p>Logout</p>
            </div>

            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Option} alt="option" width="16" height="auto" />
              <p>Option</p>
            </div>

            <div className="flex gap-2 font-medium underline text-sm">
              <img src={Info} alt="info" width="16" height="auto" />
              <p>Info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="bg-gray-700 w-full h-full">
      {/* <img
        src={MapImage}
        alt=""
        className="object-contain "
        width="1100px"
        height="auto"
      /> */}
    </div>
  );
};

const Geed = () => {
  return (
    <div className="flex h-screen w-screen bg-[#151712] font-body">
      <SideBar />
      <Map />
    </div>
  );
};

export default Geed;
