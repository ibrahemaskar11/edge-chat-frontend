import React from "react";
import ChatHead from "../chat/ChatHead";
import SideBarActions from "../sidebar/SideBarActions";
import SideBarChatsHeader from "../sidebar/SideBarChatsHeader";
import UserChats from "../chat/UserChats";
import ChatSearch from "../chat/ChatSearch";

const ChatsSidebar = () => {
  return (
    <div className=" h-[100vh] flex border-r-[1px] col-span-1">
      <SideBarActions />
      <div className="w-[80%] h-full">
        <SideBarChatsHeader />
        {/* chats */}
        <div className="py-6 px-4 h-full overflow-y-scroll flex flex-col gap-6">
          {/* Search bar */}
          <ChatSearch />
          {/* chats */}
          <UserChats />
        </div>
      </div>
    </div>
  );
};

export default ChatsSidebar;
