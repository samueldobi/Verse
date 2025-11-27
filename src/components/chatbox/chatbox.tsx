"use client";

import { useState, useRef, useEffect } from "react";

interface Buddy {
  id: string;
  name: string;
  avatar: string;
  speaks: {
    name: string;
    flag: string;
  };
  learning: {
    name: string;
    flag: string;
  };
}

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  time: string;
}

interface ChatboxProps {
  selectedBuddy: Buddy | null;
  setSelectedBuddy: (buddy: Buddy | null) => void;
  setShowSidebar: (v: boolean) => void;
}

export default function Chatbox({
  selectedBuddy,
  setSelectedBuddy,
  setShowSidebar,
}: ChatboxProps) {
  
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll to last message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedBuddy, messages]);

  const handleSendMessage = () => {
    if (!selectedBuddy || !message.trim()) return;

    const newMsg: Message = {
      id: Date.now().toString(),
      text: message.trim(),
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages(prev => ({
      ...prev,
      [selectedBuddy.id]: [...(prev[selectedBuddy.id] || []), newMsg],
    }));

    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${selectedBuddy ? "block" : "hidden md:flex"}`}>
      {selectedBuddy ? (
        <>
          {/* Header */}
          <div className="p-4 md:p-6 bg-white dark:bg-slate-800 border-b shadow-sm">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                onClick={() => {
                  setSelectedBuddy(null);
                  setShowSidebar(true);
                }}
              >
                ← Back
              </button>

              <img src={selectedBuddy.avatar} className="w-10 h-10 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{selectedBuddy.name}</h2>
                <p className="text-sm text-slate-500">
                  {selectedBuddy.speaks.flag} {selectedBuddy.speaks.name} • 
                  {selectedBuddy.learning.flag} Learning {selectedBuddy.learning.name}
                </p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-900">
            {(messages[selectedBuddy.id] || []).map(msg => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`px-4 py-2 rounded-xl max-w-xs text-sm shadow 
                    ${msg.sender === "me" 
                    ? "bg-blue-600 text-white rounded-br-none" 
                    : "bg-white dark:bg-slate-800 text-black dark:text-white rounded-bl-none"}`}>
                  {msg.text}
                </div>
                <p className="text-xs text-slate-500 ml-1 self-end">{msg.time}</p>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t">
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type here..."
                className="flex-1 px-3 py-2 border rounded-xl bg-slate-100 dark:bg-slate-700 resize-none"
                rows={1}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`px-4 rounded-xl font-medium 
                  ${message.trim() ? "bg-blue-600 text-white" : "bg-slate-400 text-slate-700"}`}>
                Send
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-slate-500">
          Select a buddy to chat
        </div>
      )}
    </div>
  );
}
