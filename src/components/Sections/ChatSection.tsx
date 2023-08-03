import React from "react";
import ChatBody from "../chat/ChatBody";
import ChatHeader from "../chat/ChatHeader";
const ChatSection = () => {
  return (
    <div className="h-[100vh]  flex flex-col border-r-[1px] col-span-2">
      {/* chat head */}
      <ChatHeader />
      {/* chat body */}
      <ChatBody />
    </div>
  );
};

export default ChatSection;
