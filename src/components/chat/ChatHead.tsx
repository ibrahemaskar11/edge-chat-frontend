import React from "react";
import { IChatHead } from "../../types/chat";
import axios from "axios";
import { ChatState } from "../../store/chatProvider";
const ChatHead: React.FC<IChatHead> = ({
  id,
  chatName,
  latestMessage,
  img,
}) => {
  const { setSelectedChat, setSelectedChatIsLoading, selectedChat } =
    ChatState();
  const fetchChatHandler = async () => {
    if (selectedChat?.chat.id === id) return;
    try {
      setSelectedChatIsLoading(true);
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
    } catch (err) {
      console.log(err);
      setSelectedChatIsLoading(false);
    }
  };
  return (
    <div
      className="grid grid-cols-5 justify-center items-center abel cursor-pointer"
      onClick={fetchChatHandler}
    >
      <div className="col-span-1 flex justify-center items-center">
        <img
          src={require(`../../assets/accounts/account-metallica.jpg`)}
          className="h-full w-[80%] rounded-xl"
          alt=""
        />
      </div>
      <div className="col-span-4 px-2">
        <div className="flex  justify-between items-center">
          <h3 className="font-semibold  text-xl">{chatName}</h3>
          <h3 className="text-[#a3a3a3] font-semibold text-md pr-2 ">
            {latestMessage.timeSinceCreation}
          </h3>
        </div>
        <h5 className="text-[#a3a3a3] font-semibold text-md mt-1 ">
          {latestMessage.message}
        </h5>
      </div>
    </div>
  );
};

export default ChatHead;
