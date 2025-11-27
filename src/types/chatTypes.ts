export interface ChatList {
  chat_id: number;
  created_at: string;           
  learning_language: string;
  participant_email: string;
  participant_id: number;
  participant_name: string;
  speaks_language: string;
  user_image: string;           
}
export interface RawMessage {
  id: number | string;
  sender_id: number;
  sender_name: string;
  content: string;
  created_at: string; 
}
export interface ChatMessage {
  id: number | string;
  sender: 'me' | string;
  text: string;
  time: string;  
}


export interface Chat {
  chat_id: number;
  participant_id: number;
  participant_name: string;
  participant_email: string;
  user_image?: string;
  speaks_language?: string;
  learning_language?: string;
  last_message?: string;
  last_seen?: string;
  online?: boolean;
  unread?: number;
  created_at: string;
}

export interface Buddy {
  chat_id: number;                  
  name: string;
  avatar: string;
  speaks: { code: string; name: string; flag: string };
  learning: { code: string; name: string; flag: string };
  lastMessage: string;
  lastSeen: string;
  online: boolean;
  unread: number;
}
