import React from "react";
import { IMessage } from "../../types/interfaces";
const Message: React.FC<IMessage> = ({ message, time, isMe }) => {
  return (
    <div
      className={`rounded-xl  ${
        isMe ? "bg-[#1E1E1E] text-white" : "bg-[#F1F1F1] text-black font"
      }`}
    >
      <h3 className="w-auto px-4 py-2 abel text-lg leading-6 tracking-wide ">
        {message}
      </h3>
    </div>
  );
};

export default Message;
