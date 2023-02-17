import React from 'react';

const Selector = () => {
  return (
    <div>
      <div className="flex h-screen w-screen bg-[#151712] font-body">
        <div className="mx-auto flex max-w-2xl flex-col justify-center gap-24 align-middle max-[665px]:my-auto">
          <h1 className="text-center text-3xl font-bold text-[#fff] stroke-white outline-2 font-display">
            Choose an option
          </h1>

          <div className="flex gap-6 px-8 text-white cursor-pointer max-[665px]:my-auto max-[665px]:flex-wrap">
            <div className="flex items-center space-x-4 rounded-xl text-xs font-medium leading-5 bg-[#A0D179]/50 p-6">
              <p className="text-4xl">🌴</p>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>

            <div className="flex items-center space-x-4 text-xs font-medium leading-5 rounded-xl bg-[#A0D179]/50 p-6">
              <p className="text-4xl">♻️</p>
              <p>
                There are many variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>

          <p className="text-center text-gray-300 text-xs font-medium">
            If you have not an account please create an <br />
            account click Login or go back Home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selector;
