export interface IChatHead {
  chatName: string;
  latestMessage: {
    message: string;
    timeSinceCreation: string;
  };
  id: string;
  img: string;
}
export interface IValidateOption<Type> {
  initialState: Type;
  required: (value: Type) => boolean;
  error: string;
}

export interface IUseForm<Type> {
  value: Type;
  error: string;
  handleChange: (val: Type) => void;
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
  id: string;
  role: string;
}
interface ILatestMessage {
  id: string;
  message: string;
  chat: string;
  sender: IUser;
}
export interface IChat {
  users: IUser[];
  messageGroups: {
    isMe: boolean;
    messages: IMessage[];
  }[];
  lastMessageTime: ILatestMessage;
  _id: string;
  isGroupChat: boolean;
  admins: string[];
  chatName: string;
  groupImg: string | null;
  groupCreator: string | null;
  latestMessage: IMessage | null;
  img: string;
  name: string;
}
