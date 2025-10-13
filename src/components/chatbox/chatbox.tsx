"use client";
export default function Chatbox({selectedBuddy}) {
    const [message, setMessage] = useState('');
    return (
       <div className={`flex-1 flex flex-col ${selectedBuddy = {selectedBuddy} ? 'block' : 'hidden md:flex'}`}>
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
    );
}