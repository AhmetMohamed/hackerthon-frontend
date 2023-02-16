import React from "react";

const SignUp = () => {
  return <div>SignUp</div>;
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
