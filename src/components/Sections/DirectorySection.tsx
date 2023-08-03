import React from "react";
import ChatMember from "../chat/ChatMember";
import FileHead from "../message/FileHead";
import ImageHead from "../message/ImageHead";
import { ChatState } from "../../store/chatProvider";

const ChatMembers = [
  {
    name: "Elmer Laverty",
    img: "account1",
    isOnline: true,
    bio: "Hello from the other side!",
  },
  {
    name: "Florencio Winters",
    img: "account2",
    isOnline: true,
    bio: "Hola!",
  },
  {
    name: "Luther Strickland",
    img: "account3",
    isOnline: true,
    bio: "Hello World!",
  },
  {
    name: "Titus Mcknight",
    img: "account4",
    isOnline: false,
    bio: "Sleeping 😴",
  },
  {
    name: "Geofry Swanson",
    img: "account5",
    isOnline: false,
    bio: "Hello from the other side!",
  },
];

const DirectorySection = () => {
  const { selectedChat } = ChatState();
  return (
    <section className="h-full w-full">
      <div className="w-full border-b-[1px] px-6 h-[5.8rem] flex justify-between items-center">
        <h3 className="font-semibold text-2xl abel flex gap-2 items-center drop-shadow-2xl cursor-default">
          Directory
        </h3>
        <button className="pr-2">
          <svg
            width="4"
            height="18"
            viewBox="0 0 4 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="#1E1E1E" />
            <circle cx="2" cy="9" r="2" fill="#1E1E1E" />
            <circle cx="2" cy="16" r="2" fill="#1E1E1E" />
          </svg>
        </button>
      </div>
      {/* chat members */}
      <div className="py-4 px-6  border-b-[1px]  h-[55vh] overflow-y-scroll">
        <h3 className="text-xl abel font-semibold mb-4 cursor-default">
          Team Members
        </h3>
        <div className="flex flex-col gap-6 ">
          {selectedChat?.users.map((member) => (
            <ChatMember
              key={member._id}
              name={member.name}
              img={member.photo}
              isOnline={true}
              bio={"Hello, World!"}
            />
          ))}
        </div>
      </div>
      {/* Files directory */}
      <div className="w-full px-6 py-6 flex flex-col justify-start items-start h-[35vh] overflow-y-scroll">
        <h3 className="text-xl abel font-semibold mb-4 cursor-default">
          Files
        </h3>
        {/* Files */}
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <FileHead />
          <ImageHead />
          <FileHead />
          <ImageHead />
          <FileHead />
          <FileHead />
          <FileHead />
        </div>
      </div>
    </section>
  );
};

export default DirectorySection;
