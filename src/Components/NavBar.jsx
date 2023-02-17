import React, { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function NavBar() {
  const [drop, setDrop] = useState(0);
  return (
    <>
      <div className="fixed bg-primary w-[100%] h-28 bg-0 md:px-32 px-3 flex justify-between items-center text-md font-poppins z-40">
        <div className="capitalize text-white underline flex-1 z-40">
          <p className="font-bold text-2xl text-center md:text-left">
            Dheegsan
          </p>
        </div>

        {!drop ? (
          <div
            className="flex-1 md:hidden flex justify-end translate-x-[-20px] z-40"
            onClick={() => setDrop(1)}
          >
            <HiOutlineMenuAlt2 className="text-secondary" size={30} />
          </div>
        ) : (
          <div
            className="flex-1 md:hidden flex justify-end translate-x-[-20px] z-40"
            onClick={() => setDrop(0)}
          >
            <GiCrossMark className="text-secondary" size={30} />
          </div>
        )}

        <div className="flex-1  hidden md:flex justify-center items-center">
          <ul className="text-white flex justify-evenly w-[200px] underline">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 hidden md:flex justify-end ">
          <ul className="flex justify-evenly text-white w-[130px] underline">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>

      {drop && (
        <motion.div
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "45%" }}
          transition={{
            type: "spring",
            ease: "easeOut",
            duration: 2,
          }}
          className="bg-secondary font-medium md:hidden text-primary text-lg  fixed w-[100%] z-20"
        >
          <ul className="text-white flex flex-col justify-evenly items-center w-[100%] z-10">
            <li className="h-8 p-6">
              <Link to="/">Home</Link>
            </li>
            <li className="h-8 p-6">
              <a href="#service">Service</a>
            </li>
            <li className="h-8 p-6">
              <a href="#about">About</a>
            </li>
            <li className="h-8 p-6">
              <Link to="/login">Login</Link>
            </li>
            <li className="h-[100%] flex pt-6 justify-evenly w-[100%] ">
              <Link
                to={"/signup"}
                className="bg-primary text-secondary flex-1 text-center p-1"
              >
                Signup
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}

export default NavBar;
