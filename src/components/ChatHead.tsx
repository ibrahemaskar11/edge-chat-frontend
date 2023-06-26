import React from "react";
// import img from "../assets/accounts/account1.png";
import { IChatHead } from "../types/interfaces";
const ChatHead: React.FC<IChatHead> = ({ name, lastMessage, time, img }) => {
  return (
    <div className="grid grid-cols-5 justify-center items-center abel cursor-pointer">
      <div className="col-span-1 flex justify-center items-center">
        <img
          src={require(`../assets/accounts/${img}.png`)}
          className="h-full w-[80%] rounded-xl"
          alt=""
        />
      </div>
      <div className="col-span-4 px-2">
        <div className="flex  justify-between items-center">
          <h3 className="font-semibold  text-xl">{name}</h3>
          <h3 className="text-[#a3a3a3] font-semibold text-md pr-2 ">
            {time}
          </h3>
        </div>
        <h5 className="text-[#a3a3a3] font-semibold text-md mt-1 ">
          {lastMessage}
        </h5>
      </div>
    </div>
  );
};

export default ChatHead;
