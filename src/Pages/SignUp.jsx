import React from 'react';

const SignUp = () => {
  return (
    <div>
      <div className="flex h-screen w-screen bg-[#151712] font-body">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-24 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#669542] underline stroke-white outline-2 font-display">
            Signup your account
          </h1>

          <div className="mx-auto flex flex-col gap-4">
            <input
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
                type="text"
                name=""
                id=""
                placeholder="Username"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <div className="flex gap-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />

              <input
                type="password"
                name=""
                id=""
                placeholder="Other"
                className="bg-[#7489A0]/30  px-3 py-3 rounded-lg text-xs font-medium"
              />
            </div>

            <button className="bg-[#669542]/80 py-2 rounded-lg font-medium text-white">
              Confirm
            </button>
          </div>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click{' '}
            <a href="#" className="text-[#669542] font-semibold">
              Signup{' '}
            </a>
            or go back{' '}
            <a href="#" className="text-[#669542] font-semibold">
              Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
