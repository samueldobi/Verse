"use client";
import React, { useState, useRef, useEffect } from 'react';
// import ProtectedRoute from '@/components/protectedRoutes/protectedRoutes';
import { Message, Friends } from '@/types/learnTypes';
import axios from 'axios';
import { useAuth } from '@/context/auth';
import Image from 'next/image';
import {io} from "socket.io-client";

// initializing the websocket
// const socket = io("http://localhost:5000");

export default function ChatPage() {
  const [selectedBuddy, setSelectedBuddy] = useState< Friends | null>(null);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Record<number, Message[]>>({});
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [chatList, setChatList] =  useState<any[]>([]);
  // Get current user id
  const {currentUser } = useAuth();
  const userId = currentUser?.id;  

  useEffect(()=>{
    const fetchChats = async ()=>{
      try{
        const res = await axios.get(
        `api/chats?userId=${userId}`
        )
        setChatList(res.data.getChats);
        // console.log("this is the chat information",res.data.getChats)
      }catch(err){
        console.log("Failed to fetch chats", err)
      }
    }
    fetchChats();
  }, [userId])

    const handleOpenChat = (item):void=>{
     const formattedBuddy = {
      id: item.chat_id,
      name: item.participant_name,
      avatar: item.user_image || '/default-avatar.png',
      speaks: { code: '', name: item.speaks_language || 'Unknown', flag: '🌍' },
      learning: { code: '', name: item.learning_language || 'Unknown', flag: '🎯' },
      lastMessage: item.last_message || 'No messages yet',
      lastSeen: item.last_seen || '',
      online: false,
      unread: item.unread || 0,
    };
    setSelectedBuddy(formattedBuddy)
    setShowSidebar(false);
    setMessages(prev => ({
    ...prev,
    [formattedBuddy.id]: []
  }));
  console.log(formattedBuddy)
  }

  const handleSendMessage = async ():Promise<void> => {
    if (!message.trim() || !selectedBuddy) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Emit to socket
    socketRef.current.emit("send_message", {
      chatId: selectedBuddy.id,
      senderId: userId,
      content: newMessage.text,
    });
    setMessages(prev => ({
      ...prev,
      [selectedBuddy.id]: [...(prev[selectedBuddy.id] || []), newMessage]
    }));
    setMessage('');
    // Api request 
    try{
      
      const res = await axios.post(
        `api/chats/${selectedBuddy.id}/messages`,{
          chatId: selectedBuddy.id,
          senderId: userId,
          content: newMessage.text
        }
      )
      console.log(res)
    }catch(err){
      console.log(err)
    }
  };

  const fetchMessages = async (chatId: number) => {
  try {
    const res = await axios.get(`/api/chats/${chatId}/messages`);
    const data = res.data;
    console.log(data)

    if (data.messages) {
      // Format backend data to match your frontend structure
      const formattedMessages = data.messages.map((msg: any) => ({
        id: msg.id,
        sender: msg.sender_id === userId ? 'me' : msg.sender_name,
        text: msg.content,
        time: new Date(msg.created_at).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      }));

      setMessages((prev) => ({
        ...prev,
        [chatId]: formattedMessages,
      }));
    }
  } catch (err) {
    console.error("Error fetching messages:", err);
  }
};

  // Load messages when a user selects a buddy
  useEffect(() => {
  if (selectedBuddy) {
    fetchMessages(selectedBuddy.id);
  }
}, [selectedBuddy]);
useEffect(() => {
  if (selectedBuddy && socketRef.current) {
    socketRef.current.emit("join_chat", selectedBuddy.id);
  }
}, [selectedBuddy]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void  => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  // Socket function 
  const socketRef = useRef(null);

useEffect(() => {
    const socket = io("http://localhost:5000");
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("🟢 Connected to socket:", socket.id);
    });

    socket.on("receive_message", (msg) => {
      console.log("📩 New message received:", msg);
      setMessages((prev) => ({
        ...prev,
        [msg.chatId]: [...(prev[msg.chatId] || []), msg]
      }));
    });

    return () => {
      socket.disconnect();
    };
}, []);

  return (
    // <ProtectedRoute>
    <div className="h-screen bg-slate-50 dark:bg-slate-900 flex relative">
      {/* Mobile Overlay */}
      {showSidebar && selectedBuddy && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Buddy List Sidebar */}
      <div className={`${showSidebar || !selectedBuddy ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-50 w-80 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col h-full transition-transform duration-300 ease-in-out`}>
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Chats </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {buddies.filter(b => b.online).length} online now
            </p>
          </div>
          <button onClick={() => setShowSidebar(false)} className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
            <div className="w-6 h-6 relative">
              <span className="absolute block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transform rotate-45 top-3"></span>
              <span className="absolute block w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transform -rotate-45 top-3"></span>
            </div>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* This is where the buddies map component was  */}
        
            <div className="flex-1 overflow-y-auto">
          {chatList.length === 0 ? (
  <p>No chats found</p>
        ) : (
          chatList.map((item) => (
            <button
              key={item.chat_id}
              onClick={() => {handleOpenChat(item)}}
              className={`w-full p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border-b border-slate-100 dark:border-slate-700 ${
                selectedBuddy?.chat_id === item.chat_id
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-r-blue-500'
                  : ''
              }`}
            >
      <div className="flex items-center space-x-3">
        {/* --- Avatar placeholder (replace with item.avatar when available) --- */}
        <div className="relative">
          <Image
            src={item.user_image || '/default-avatar.png'}
            alt={item.participant_name}
            width={50}
            height={50}
            className="w-12 h-12 rounded-full object-cover"
          />
          {/* Optional online indicator — if you ever add online status */}
          {item.online && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full"></div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* --- Top row: Name + Unread count --- */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-slate-900 dark:text-white truncate">
              {item.participant_name}
            </h3>
            {item.unread > 0 && (
              <div className="w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {item.unread}
              </div>
            )}
          </div>

          {/* --- Language row  --- */}
          <div className="flex items-center space-x-2 mb-2">
            
            <span className="text-xs">{item.speaks_language || '🌍'}</span>
            <span className="text-xs">↔</span>
            <span className="text-xs">{item.learning_language || '🎯'}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {item.speaks_language || 'Unknown'} ↔ {item.learning_language || 'Unknown'}
            </span>
          </div>

          {/* --- Last message placeholder --- */}
          <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
            {item.last_message || 'No messages yet'}
          </p>

          {/* --- Last seen placeholder --- */}
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            {item.last_seen || ''}
          </p>
        </div>
      </div>
    </button>
  ))
)}

    </div>
    </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 flex flex-col ${selectedBuddy ? 'block' : 'hidden md:flex'}`}>
        {selectedBuddy ? (
          <>
            {/* Chat Header */}
            <div className="p-4 md:p-6 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <button 
                    onClick={() => {
                      setSelectedBuddy(null);
                      setShowSidebar(true);
                    }}
                    className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                  >
                    <div className="w-5 h-5 border-2 border-current border-r-0 border-t-0 transform -rotate-45"></div>
                  </button>
                  <Image
                   src={selectedBuddy.avatar} 
                   alt={selectedBuddy.name} 
                   width={50}
                   height={50}
                   className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{selectedBuddy.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{selectedBuddy.speaks.flag} {selectedBuddy.speaks.name} • {selectedBuddy.learning.flag} Learning {selectedBuddy.learning.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-slate-50 dark:bg-slate-900">
              {(messages[selectedBuddy.id] || []).map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-sm lg:max-w-md space-y-1 ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'me'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-bl-md border'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{msg.time}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 md:p-6 bg-white dark:bg-slate-800 border-t">
              <div className="flex items-end space-x-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  rows={1}
                  className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-700 border rounded-2xl resize-none"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className={`px-4 py-2 rounded-lg ${
                    message.trim() ? 'bg-blue-600 text-white' : 'bg-slate-300 text-slate-500'
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">Select a buddy to start chatting</p>
          </div>
        )}
      </div>
    </div>
    // </ProtectedRoute>
  );
}
