import React, { useEffect, useState } from "react";
import ChatHead from "../chat/ChatHead";
import axios from "axios";
import { IChat, IChatHead } from "../../types/chat";
import { ChatState } from "../../store/chatProvider";

const chatHead = [
  {
    name: "Ibrahim Askar",
    lastMessage: "I’m down to chill today",
    time: "4m",
    img: "account7",
  },
  {
    name: "Elmer Laverty",
    lastMessage: "Haha oh man🔥",
    time: "12m",
    img: "account1",
  },
  {
    name: "Florencio Winters",
    lastMessage: "I’m down to chill today",
    time: "24m",
    img: "account2",
  },
  {
    name: "Luther Strickland",
    lastMessage: "Haha that's terrifing 😂",
    time: "2h",
    img: "account3",
  },
  {
    name: "Titus Mcknight",
    lastMessage: "omg, that's so funny",
    time: "5h",
    img: "account4",
  },
  {
    name: "Geofry Swanson",
    lastMessage: "Perfect!",
    time: "2d",
    img: "account5",
  },
  {
    name: "Alfonzo Mckinney",
    lastMessage: "aww 😍",
    time: "2d",
    img: "account6",
  },
];

const UserChats = () => {
  const {
    user,
    isLoggedIn,
    chats,
    setChats,
    filteredChats,
    setFilteredChats,
    setSelectedChat,
    setSelectedChatIsLoading,
  } = ChatState();
  useEffect(() => {
    const fetchSelectedChat = async (id: string) => {
      const res = await axios(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/chat/${id}`,
        {
          withCredentials: true,
        }
      );
      const { data } = res.data;
      console.log(data);

      setSelectedChat(data);
      setSelectedChatIsLoading(false);
    };
    const fetchChats = async () => {
      if (!isLoggedIn) return;
      try {
        const res = await axios(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/chat/`,
          {
            method: "GET",
            withCredentials: true,
          }
        );
        const { data } = res.data;
        setChats(data.chats);
        setFilteredChats(data.chats);
        console.log(data.chats);
        setSelectedChatIsLoading(true);
        fetchSelectedChat(data.chats[0].id);
      } catch (err) {
        console.log(err);
      }
    };
    fetchChats();
  }, []);
  return (
    <div className="flex flex-col gap-8 ">
      {filteredChats.map((chatHead, index) => (
        <ChatHead
          key={index}
          id={chatHead.id.toString()}
          chatName={chatHead.chatName}
          latestMessage={chatHead.latestMessage}
          img={chatHead.img}
        />
      ))}
    </div>
  );
};

export default UserChats;
