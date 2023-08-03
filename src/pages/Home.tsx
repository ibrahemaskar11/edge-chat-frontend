import React, { useEffect } from "react";
import ChatsSidebar from "../components/Sections/ChatSidebar";
import ChatSection from "../components/Sections/ChatSection";
import DirectorySection from "../components/Sections/DirectorySection";
import { ChatState } from "../store/chatProvider";
import { useNavigate } from "react-router";
const Home = () => {
  const { isLoggedIn } = ChatState();
  const history = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      history("/auth/");
    }
  }, []);
  return (
    <div className="grid grid-cols-4 h-[100vh] overflow-hidden">
      <ChatsSidebar />
      <ChatSection />
      <DirectorySection />
    </div>
  );
};

export default Home;
