export interface IChatHead {
  chatName: string;
  latestMessage: {
    message: string;
    timeSinceCreation: string;
  };
  id: string;
  img: string;
}

//////////////////////////////
//Needs updating
//////////////////////////////
export interface IMessage {
  message: string;
  time: string;
  isMe: boolean;
  userId: string;
  sender?: IUser;
  createdAt: string;
}
export interface IChatGroup {
  isMe: boolean;
  messages: IMessage[];
}
export interface IChatMember {
  img: string;
  name: string;
  bio: string;
  isOnline: boolean;
}

export interface INotification {
  img: string;
  name: string;
  message: string;
  time: string;
  isRead: boolean;
}

export interface IUser {
  photo: string;
  name: string;
  email: string;
  bio: string;
  _id: string;
  role: string;
}
interface ILatestMessage {
  id: string;
  message: string;
  chat: string;
  sender: IUser;
}
export interface IChat {
  chat: {
    admin: string[];
    chatName: string;
    groupImg: string | null;
    id: string;
    isGroupChat: boolean;
    latestMessage: ILatestMessage | null;
    users: string[];
  };
  messageGroups: {
    isMe: boolean;
    messages: IMessage[];
  }[];
  users: IUser[];
}
