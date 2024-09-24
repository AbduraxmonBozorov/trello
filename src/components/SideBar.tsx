import React from "react";
import trelloIcon from "../assets/images/trelloLogo.svg";
import main from "../assets/images/main.svg";
import prosses from "../assets/images/prosses.svg";
import task from "../assets/images/taskIcon.svg";
import setting from "../assets/images/settings.svg";
import message from "../assets/images/message.svg";
import folder from "../assets/images/folder.svg";
import { useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  interface Url {
    hash: string,
    key: string,
    pathname: string,
    search: string,
    state: null
  }

  let url: Url = useLocation();
  let pathname = url.pathname.split("/")[1];
  console.log(pathname);

  return (
    <div className="side-bar border w-[94px] py-[20px] px-[15px] h-svh">
      <img src={trelloIcon} className="w-[64px] h-[61px] mb-[151px]" alt="" />
      <div className="border flex flex-col justify-center items-center gap-[45px]">
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 hover:bg-blue-300"
          src={main}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 hover:bg-blue-300"
          src={prosses}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 bg-blue-600 text-white"
          src={task}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 hover:bg-blue-300"
          src={setting}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 hover:bg-blue-300"
          src={message}
          alt=""
        />
        <img
          className="w-[40px] h-[40px] rounded-md cursor-pointer p-2 hover:bg-blue-300"
          src={folder}
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
