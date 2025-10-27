"use client";
import React, { useState, useRef, useEffect } from 'react';
import ProtectedRoute from '@/components/protectedRoutes/protectedRoutes';
import { Message, Friends } from '@/types/learnTypes';
import axios from 'axios';
import { useAuth } from '@/context/auth';

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
  // Mock data for buddies
  const buddies:Friends[] = [
    {
      id: 1,
      name: 'Maria González',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b217?w=150&h=150&fit=crop&crop=face',
      speaks: { code: 'es', name: 'Spanish', flag: '🇪🇸' },
      learning: { code: 'en', name: 'English', flag: '🇺🇸' },
      lastMessage: 'Hola! How was your weekend?',
      lastSeen: '2 min ago',
      online: true,
      unread: 2
    },
    {
      id: 2,
      name: 'Takeshi Yamamoto',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      speaks: { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
      learning: { code: 'en', name: 'English', flag: '🇺🇸' },
      lastMessage: 'Thanks for explaining American culture!',
      lastSeen: '1 hour ago',
      online: false,
      unread: 0
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      speaks: { code: 'fr', name: 'French', flag: '🇫🇷' },
      learning: { code: 'en', name: 'English', flag: '🇺🇸' },
      lastMessage: 'Shall we practice pronunciation today?',
      lastSeen: '5 hours ago',
      online: false,
      unread: 1
    },
    {
      id: 4,
      name: 'Ahmad Hassan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      speaks: { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
      learning: { code: 'en', name: 'English', flag: '🇺🇸' },
      lastMessage: 'The cultural exchange was amazing!',
      lastSeen: '1 day ago',
      online: false,
      unread: 0
    }
  ];

  // Mock messages
  const mockMessages: Record<number, Message[]> = {
    1: [
      { id: 1, sender: 'buddy', text: '¡Hola! How was your weekend?', time: '10:30 AM' },
      { id: 2, sender: 'me', text: 'Hi Maria! It was great, I went hiking. How do you say "mountain" in Spanish?', time: '10:32 AM' },
      { id: 3, sender: 'buddy', text: 'Montaña! 🏔️ I love hiking too.', time: '10:33 AM' },
      { id: 4, sender: 'me', text: 'That sounds amazing! I\'d love to visit Spain someday.', time: '10:35 AM' },
      { id: 5, sender: 'buddy', text: 'You should! I can show you around Barcelona. Your Spanish is improving! 🎉', time: '10:36 AM' }
    ]
  };

  useEffect(() => {
    if (selectedBuddy) {
      setMessages(prev => ({ ...prev, [selectedBuddy.id]: mockMessages[selectedBuddy.id] || [] }));
    }
  }, [selectedBuddy]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedBuddy]);
  useEffect(()=>{
    const fetchChats = async ()=>{
      try{
        const res = await axios.get(
        `api/chats?userId=${userId}`
        )
        setChatList(res.data.getChats);
      }catch(err){
        console.log("Failed to fetch chats", err)
      }
    }
    fetchChats();
  }, [userId])

  const handleSendMessage = ():void => {
    if (!message.trim() || !selectedBuddy) return;

    const newMessage: Message = {
      id: Date.now(),
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [selectedBuddy.id]: [...(prev[selectedBuddy.id] || []), newMessage]
    }));
    setMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void  => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ProtectedRoute>
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
          {/* {buddies.map((buddy) => (
            <button
              key={buddy.id}
              onClick={() => {
                setSelectedBuddy(buddy);
                setShowSidebar(false);
              }}
              className={`w-full p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border-b border-slate-100 dark:border-slate-700 ${
                selectedBuddy?.id === buddy.id ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-r-blue-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={buddy.avatar} alt={buddy.name} className="w-12 h-12 rounded-full object-cover" />
                  {buddy.online && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white dark:border-slate-800 rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-slate-900 dark:text-white truncate">{buddy.name}</h3>
                    {buddy.unread > 0 && <div className="w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">{buddy.unread}</div>}
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs">{buddy.speaks.flag}</span>
                    <span className="text-xs">↔</span>
                    <span className="text-xs">{buddy.learning.flag}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{buddy.speaks.name} ↔ {buddy.learning.name}</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 truncate">{buddy.lastMessage}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{buddy.lastSeen}</p>
                </div>
              </div>
            </button>
          ))} */}
            <div>
          {chatList.length === 0 ? (
            <p>No chats found</p>
          ) : (
            chatList.map((item) => (
              <div key={item.chat_id}>
                {item.participant_name}
              </div>
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
                  <img src={selectedBuddy.avatar} alt={selectedBuddy.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
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
    </ProtectedRoute>
  );
}
