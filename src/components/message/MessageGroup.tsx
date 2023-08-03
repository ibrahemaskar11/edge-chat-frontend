import React from "react";
import userImg from "../../assets/accounts/account-metallica.jpg";
import { IChatGroup } from "../../types/chat";
import Message from "./Message";
const MessageGroup: React.FC<IChatGroup> = ({ messages, isMe }) => {
  return (
    <div
      className={`${
        isMe
          ? "self-end justify-end "
          : "self-start justify-end flex-row-reverse "
      } items-start w-[48%] flex  gap-4 mb-4`}
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
              message={message.message}
              time={message.time}
              isMe={isMe}
              userId={message.userId}
              createdAt=""
            />
          );
        })}
        <div className="px-2">
          <h5 className="text-[#1E1E1E]/80 font-semibold text-xs pr-2 inter">
            {"12:00 AM"}
          </h5>
        </div>
      </div>
      <div className="min-w-[3rem] h-[3rem]">
        <img src={userImg} className="w-full h-full rounded-xl" alt="" />
      </div>
    </div>
  );
};

export default MessageGroup;
