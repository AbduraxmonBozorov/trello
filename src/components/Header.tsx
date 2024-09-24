import React from "react";
import  notificatiion from "../assets/images/notification.svg"
import user from "../assets/images/user.svg"
import chevronDown from "../assets/images/chewron-down.svg";

const Header: React.FC = () => {
  return (
    <div className="header p-4 flex flex-row">
      <div className="searchq w-11/12 md:w-[80%]">
        <label className="input input-bordered flex items-center gap-2 md:w-1/3 mx-auto">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="header-profile w-[20%] flex flex-row items-center justify-center md:gap-7">
        <img src={notificatiion} className="cursor-pointer" alt="" />
        <div className="flex flex-row gap-1 items-center justify-center cursor-pointer">
            <img src={user} alt="" />
            <img src={chevronDown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
