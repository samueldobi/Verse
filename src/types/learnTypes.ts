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
export type Match =  {
  match_id: number;
  match_uid: string;
  name: string;
  speaks_language: string;
  learning_language: string;
}
