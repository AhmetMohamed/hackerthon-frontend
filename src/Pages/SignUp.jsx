import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [other, setOther] = useState('');
  const [password, setPassowrd] = useState('');

  const handleClick = () => {
    console.log(email, password, fullName, other, username);
  };

  return (
    <div>
      <div className="flex h-screen w-screen bg-[#151712] font-body text-white">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-24 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#669542] underline stroke-white outline-2 font-display">
            Signup your account
          </h1>

          <div className="mx-auto flex flex-col gap-4">
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Full Name"
              className="bg-[#7489A0]/30 w-full px-3 py-3 rounded-lg text-xs font-medium"
            />

            {/* <input
              type="file"
              name=""
              id=""
              placeholder="Avatar"
              className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium file:rounded-md file:bg-[#669542] file:text-xm file:font-semibold file:text-white hover:file:bg-[#669542]/40"
            /> */}

            <div className="flex gap-4">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Username"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="flex gap-4">
              <input
                onChange={(e) => setPassowrd(e.target.value)}
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                onChange={(e) => setOther(e.target.value)}
                type="text"
                name=""
                id=""
                placeholder="Other"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <button
              onClick={handleClick}
              className="bg-[#669542]/80 py-2 rounded-lg font-medium text-white"
            >
              Confirm
            </button>
          </div>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click{' '}
            <Link
              to="/login"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Login{' '}
            </Link>
            or go back{' '}
            <Link
              to="/"
              className="text-[#669542] font-semibold cursor-pointer"
            >
              Home{' '}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


<div class="flex min-h-screen flex-col justify-center bg-[#1E1E1E] sm:py-12">
  <div class="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
    <h1 class="text-center mb-5 text-2xl font-bold text-[#669542]">Signup Your account</h1>
    <div class="w-full divide-y divide-gray-200 rounded-lg bg-[#1E1E1E] text-[#717A84]">
      <div class="px-5 py-7">
        <input type="text" class="w-full rounded-lg bg-[#545e69] px-3 py-2 text-sm" placeholder="Fullname" />
        <div class="py-5">
          <div class="grid grid-cols-2 gap-3">
            <input type="text" class="text-center inline-block w-full rounded-lg bg-[#545e69] text-sm font-normal text-gray-500" placeholder="username" />
            <input type="email" class="text-gray-00 text-center w-full rounded-lg bg-[#545e69] py-2.5 text-sm font-normal shadow-sm transition duration-200 hover:shadow-md" placeholder="Email" />
          </div>
        </div>

        <div class="">
          <div class="grid grid-cols-2 gap-3">
            <input type="password" class="text-center inline-block w-full rounded-lg bg-[#545e69] py-2.5 text-sm font-normal text-gray-500 shadow-sm transition duration-200 hover:shadow-md" placeholder="password" />
            <input type="file" class="text-gray-00 text-center inline-block w-full rounded-lg bg-[#545e69] px-3 py-2 text-sm font-normal shadow-sm transition duration-200 hover:shadow-md" placeholder="upload img" />
          </div>
        </div>

        <button type="button" class="text-center mt-6 inline-block w-full rounded-lg bg-[#669542] px-3 py-2 text-sm font-semibold text-white shadow-sm transition duration-200">
          <span class="mr-2 inline-block">Confirm</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="inline-block h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    <div class="text-[#717A84]">
      <p class="text-center">
        if you have not account please click <br />
        <span> <a href="" class="text-[#669542]"> Signup </a> or go back to <a href="#" class="text-[#669542]"> HOME</a> </span>
      </p>
    </div>
  </div>
</div>
