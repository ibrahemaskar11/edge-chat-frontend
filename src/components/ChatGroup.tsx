import React from "react";
import userImg from "../assets/accounts/account7.png";
import { IChatGroup } from "../types/interfaces";
import Message from "./Message";
const ChatGroup: React.FC<IChatGroup> = ({
  img,
  messages,
  lastMessageTime,
  isMe,
  userId,
}) => {
  return (
    <div
      className={`${
        isMe
          ? "self-end justify-end "
          : "self-start justify-end flex-row-reverse "
      } items-start w-[48%] flex  gap-4 `}
    >
      
          <div
            className={`flex  ${
              isMe ? "justify-end items-end" : "justify-start items-start"
            } gap-3 flex-col max-w-full`}
          >
            {messages.map((message, index) => {
              return (
                <Message
                  key={index}
                  content={message.content}
                  time={message.time}
                  isMe={message.isMe}
                  userId={message.userId}
                />
              );
            })}
            <div className="px-2">
              <h5 className="text-[#1E1E1E]/80 font-semibold text-xs pr-2 inter">
                {lastMessageTime}
              </h5>
            </div>
          </div>
          <div className="min-w-[3rem] h-[3rem]">
            <img src={userImg} className="w-full h-full rounded-xl" alt="" />
          </div>
       </div>
  );
};

export default ChatGroup;
