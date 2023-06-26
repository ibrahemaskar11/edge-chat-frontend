export interface IChatHead {
  name: string;
  lastMessage: string;
  time: string;
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
export interface IMessage {
  content: string;
  time: string;
  isMe: boolean;
  userId: string;
}
export interface IChatGroup{
  img: string;
  messages: IMessage[];
  lastMessageTime: string;
  isMe: boolean;
  userId: string;
}
export interface IChatMember{
  img: string;
  name: string;
  bio: string;
  isOnline: boolean;
}