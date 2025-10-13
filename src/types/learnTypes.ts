export type Language = {
  code: string;
  name: string;
  flag: string;
};
export type Friends = {
  id: number;
  name: string;
  avatar: string;
  speaks: Language;
  learning: Language;
  lastMessage: string;
  lastSeen: string;
  online: boolean;
  unread: number;
};
export type Message = {
  id: number;
  sender: 'me' | 'buddy';
  text: string;
  time: string;
};