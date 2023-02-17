import React from 'react';

import Message from '../Assets/Message.svg';
import Home from '../Assets/Home.svg';
import Recycle from '../Assets/Recycle.svg';
import Setting from '../Assets/Setting.svg';
import Logout from '../Assets/logOutIcon.svg';

const SideBar = () => {
  return (
    <div className="">
      <div className="bg-[#1A2017] flex flex-col gap-2 h-screen w-[300px] px-4 py-5">
        <div className="mt-6 px-5">
          <h1 className="font-display px-5 underline text-[#669542]">
            Hackathon
          </h1>

          <div className="flex flex-col gap-3 justify-between mt-6 cursor-pointer text-gray-100">
            <div className="flex gap-2 font-medium underline hover:bg-[#669542]  px-3 py-2 rounded-lg text-sm">
              <img src={Home} alt="logout" width="16" height="auto" />
              <p>Home</p>
            </div>

            <div className="flex gap-2 font-medium px-3 py-2 hover:bg-[#669542] rounded-lg underline text-sm">
              <img src={Recycle} alt="option" width="16" height="auto" />
              <p>Recycling</p>
            </div>

            <div className="flex gap-2 font-medium px-3 py-2 hover:bg-[#669542] rounded-lg underline text-sm">
              <img src={Setting} alt="info" width="16" height="auto" />
              <p>Setting</p>
            </div>

            <div className="flex gap-2 font-medium px-3 py-2 hover:bg-[#669542] rounded-lg underline text-sm">
              <img src={Message} alt="info" width="16" height="auto" />
              <p>Message</p>
            </div>

            <div className="flex gap-2 font-medium px-3 py-2 hover:bg-[#669542] rounded-lg underline text-sm">
              <img src={Logout} alt="info" width="16" height="auto" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="w-full p-8 bg-[#151712] font-body text-sm font-medium">
      <div className="bg-[#669542] px-5 py-4 mt-6 text-gray-900 rounded-lg leading-6">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          majority have suffered alteration in some form, by injected humour, or
          randomised. There are many variations of passages of Lorem Ipsum
          available, but majority have suffered alteration in some form, by
          injected humour, or randomised.......
        </p>
      </div>
      <table class="text-sm w-full mt-9 text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs font-normal  bg-[#669542]/50 text-white">
          <tr>
            <th scope="col" class="px-6 py-3">
              Order ID
            </th>
            <th scope="col" class="px-6 py-3">
              Date / Time
            </th>
            <th scope="col" class="px-6 py-3">
              Order Type
            </th>
            <th scope="col" class="px-6 py-3">
              Full Name
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Num Of Trees
            </th>
            <th scope="col" class="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=" text-gray-400 border-b ">
            <td class="px-6 py-4">01015</td>
            <td class="px-6 py-4">10:00 PM</td>
            <td class="px-6 py-4">Planting</td>
            <td class="px-6 py-4">Mohamed Ali</td>
            <td class="px-6 py-4">Complete</td>
            <td class="px-6 py-4">9 Mango</td>
            <td class="px-6 py-4">$18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Admin = () => {
  return (
    <div className="flex ">
      <SideBar />
      <Table />
    </div>
  );
};

export default Admin;
