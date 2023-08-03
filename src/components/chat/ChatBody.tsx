import React from "react";
import MessageGroup from "../message/MessageGroup";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { ChatState } from "../../store/chatProvider";

const ChatBody = () => {
  const [showEmojis, setShowEmojis] = React.useState<boolean>(false);
  const { selectedChat } = ChatState();
  return (
    <div className="flex flex-col-reverse h-full py-6 px-12 overflow-y-scroll">
      {showEmojis && (
        <div className="picker">
          <div className="absolute bottom-[3.7rem] ">
            <Picker
              data={data}
              onEmojiSelect={console.log}
              theme="light"
              previewPosition="none"
            />
          </div>
        </div>
      )}
      {/* message input */}
      <div className="w-full flex  justify-center items-center gap-2 ">
        {/* input */}
        <div className="gap-4 border-[2px] w-full h-12 rounded-xl flex justify-center items-center px-4 py-2">
          <button className="flex justify-start h-full w-[28px] items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.1 3 4.97 6.13 4.97 10V16C4.97 19.31 7.66 22 10.97 22"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center">
            <button
              onClick={() => {
                setShowEmojis((prevState) => !prevState);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M15 9H15.01M9 9H9.01M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.3345 3 6.93964 4.15875 5.29168 6"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <input
            type="text"
            placeholder="Type a message"
            className="w-full outline-none text-lg font-[500] abel"
          />
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.10999 11.65L11.69 8.06M5.39999 4.32L13.89 1.49C17.7 0.220002 19.77 2.3 18.51 6.11L15.68 14.6C13.78 20.31 10.66 20.31 8.75999 14.6L7.91999 12.08L5.39999 11.24C-0.310007 9.34 -0.310007 6.23 5.39999 4.32V4.32Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* messages */}
      <div className="flex flex-col-reverse py-8">
        {selectedChat?.messageGroups.map((messageGroup) => {
          console.log(messageGroup);
          return (
            <MessageGroup
              messages={messageGroup.messages}
              isMe={messageGroup.isMe}
            />
          );
        })}
        {/* Sent messages */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={true}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
        {/* Recieved messages */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={false}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={true}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={false}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: true,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={true}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
        {/* <MessageGroup
          messages={[
            {
              message: "Hello, World!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "Hello my name is ibrahim",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
            {
              message: "How is it going over there!",
              time: "12:00 PM",
              isMe: false,
              userId: "1",
              createdAt: "",
            },
          ]}
          isMe={false}
          lastMessageTime="12:00 AM"
          userId="1"
          img=""
        /> */}
      </div>
    </div>
  );
};

export default ChatBody;
