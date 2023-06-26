import React from "react";
import ChatsSidebar from "../components/Sections/ChatSidebar";
import ChatSection from "../components/Sections/ChatSection";
import DirectorySection from "../components/Sections/DirectorySection";
const Home = () => {
  return (
    <div className="grid grid-cols-4 h-[100vh] overflow-hidden">
      <ChatsSidebar />
      <ChatSection />
      <DirectorySection />
    </div>
  );
};

export default Home;
