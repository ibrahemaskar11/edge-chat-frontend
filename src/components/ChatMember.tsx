import React from 'react'
import { IChatMember } from '../types/interfaces';
const ChatMember:React.FC<IChatMember> = ({
    img,
    name,
    bio,
    isOnline,
}) => {
  return (
    <div className="px-3 flex justify-start gap-2 items-center abel cursor-pointer">
      <div className="col-span-1 flex justify-center items-center">
        <img
          src={require(`../assets/accounts/${img}.png`)}
          className="h-[3.5rem] w-[3.5rem] rounded-xl"
          alt=""
        />
      </div>
      <div className="px-2 flex flex-col items-start justify-center">
        <div className="">
          <h3 className="font-semibold  text-lg flex items-center gap-2">
            {name}
            {isOnline && <span>
              <svg
                width="8"
                height="8"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5.5" r="5" fill="#68D391" />
              </svg>
            </span>}
          </h3>
        </div>
        <h5 className="text-[#a3a3a3] font-semibold text-md   mt-1 ">{bio}</h5>
      </div>
    </div>
  );
}

export default ChatMember