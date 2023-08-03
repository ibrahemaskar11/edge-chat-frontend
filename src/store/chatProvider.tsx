import React, { ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { IChat, INotification, IUser } from "../types/chat";
import { useNavigate } from "react-router";
import axios from "axios";
import { IChatHead } from "../types/chat";
const ChatContext = createContext<{
  user: IUser | null;
  selectedChat: IChat | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<IChat | null>>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  notification: INotification | null;
  setNotification: React.Dispatch<React.SetStateAction<INotification | null>>;
  chats: IChatHead[];
  setChats: React.Dispatch<React.SetStateAction<IChatHead[] | []>>;
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  filteredChats: IChatHead[] | [];
  setFilteredChats: React.Dispatch<React.SetStateAction<IChatHead[] | []>>;
  selectedChatIsLoading: boolean;
  setSelectedChatIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logoutHandler: () => void;
}>({
  selectedChat: null,
  user: null,
  setSelectedChat: () => {},
  setUser: () => {},
  notification: null,
  setNotification: () => {},
  chats: [],
  setChats: () => {},
  isLoggedIn: false,
  isLoading: true,
  setIsLoading: () => {},
  setIsLoggedIn: () => {},
  logoutHandler: () => {},
  filteredChats: [],
  setFilteredChats: () => {},
  selectedChatIsLoading: true,
  setSelectedChatIsLoading: () => {},
});

// const chatProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {};
export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedChat, setSelectedChat] = useState<IChat | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [notification, setNotification] = useState<INotification | null>(null);
  const [chats, setChats] = useState<IChatHead[] | []>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredChats, setFilteredChats] = useState<IChatHead[] | []>([]);
  const [selectedChatIsLoading, setSelectedChatIsLoading] =
    useState<boolean>(true);
  const history = useNavigate();
  console.log(selectedChat);
  const logoutHandler = async () => {
    // setIsLoading(true);
    try {
      const res = await axios(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/users/logout`,
        {
          withCredentials: true,
        }
      );
      const data = res.data;
      console.log(data);
      setIsLoggedIn(false);
      history("/auth");
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
      // setIsLoading(false)
    }
  };
  return (
    <ChatContext.Provider
      value={{
        selectedChat,
        setSelectedChat,
        user,
        setUser,
        notification,
        setNotification,
        chats,
        setChats,
        isLoggedIn,
        isLoading,
        setIsLoading,
        setIsLoggedIn,
        logoutHandler,
        filteredChats,
        setFilteredChats,
        selectedChatIsLoading,
        setSelectedChatIsLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};
