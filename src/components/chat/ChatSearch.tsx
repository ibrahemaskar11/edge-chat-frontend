import React, { useEffect } from "react";
import { useState } from "react";
import { ChatState } from "../../store/chatProvider";
import axios from "axios";
const ChatSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { chats, setFilteredChats } = ChatState();
  useEffect(() => {
    const search = async () => {
      const filteredChats = chats.filter((chat) => {
        const regex = new RegExp(searchTerm, "i");
        console.log(regex)
        return regex.test(chat.chatName);
      });
      setFilteredChats(filteredChats);
    };
    const searchTimer = setTimeout(() => {
      search();
    }, 500);
    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchTerm]);
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        className="bg-[#F3F3F3] w-full  rounded-lg py-3 abel text-lg outline-none px-4"
        placeholder="Search for chats by name..."
        name=""
        id=""
      />
    </div>
  );
};

export default ChatSearch;
