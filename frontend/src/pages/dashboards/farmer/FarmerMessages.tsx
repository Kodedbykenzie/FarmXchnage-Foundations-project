import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-tailwind/react';

export function FarmerMessages() {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      customer: 'Agro Market Ltd',
      lastMessage: 'Can we negotiate the maize price?',
      timestamp: '2024-03-15T09:30:00',
      unread: 2,
      avatar: 'https://example.com/avatar1.jpg',
      messages: [
        { id: 1, text: 'Hello, I have 500kg maize available', sender: 'farmer', timestamp: '2024-03-15T09:15:00' },
        { id: 2, text: 'Can we negotiate the maize price?', sender: 'customer', timestamp: '2024-03-15T09:30:00' },
      ]
    },
    {
      id: 2,
      customer: 'City Supermarket',
      lastMessage: 'Tomatoes order confirmed',
      timestamp: '2024-03-14T16:45:00',
      unread: 0,
      avatar: 'https://example.com/avatar2.jpg',
      messages: [
        { id: 1, text: 'Tomatoes order of 200kg placed', sender: 'customer', timestamp: '2024-03-14T16:45:00' },
        { id: 2, text: 'Order confirmed, will ship tomorrow', sender: 'farmer', timestamp: '2024-03-14T17:00:00' },
      ]
    }
  ]);

  const [selectedConversation, setSelectedConversation] = useState<{
    id: number;
    customer: string;
    lastMessage: string;
    timestamp: string;
    unread: number;
    avatar: string;
    messages: { id: number; text: string; sender: string; timestamp: string }[];
  } | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const updatedConversations = conversations.map(conv => {
      if (selectedConversation && conv.id === selectedConversation.id) {
        return {
          ...conv,
          messages: [
            ...conv.messages,
            {
              id: conv.messages.length + 1,
              text: newMessage,
              sender: 'farmer',
              timestamp: new Date().toISOString()
            }
          ],
          lastMessage: newMessage,
          timestamp: new Date().toISOString()
        };
      }
      return conv;
    });

    setConversations(updatedConversations);
    setNewMessage('');
  };

  const filteredConversations = conversations.filter(conv =>
    conv.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 h-[calc(100vh-160px)]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
        <button 
          onClick={() => setShowNewMessageModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          New Message
        </button>
      </div>

      <div className="flex gap-6 h-full">
        {/* Conversations List */}
        <div className="w-1/3 border-r pr-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full p-2 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="space-y-4">
            {filteredConversations.map(conv => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`p-4 rounded-lg cursor-pointer ${selectedConversation?.id === conv.id ? 'bg-green-50 border-2 border-green-200' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar src={conv.avatar} alt={conv.customer} size="sm" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{conv.customer}</h3>
                      <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">
                      {new Date(conv.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                    {conv.unread > 0 && (
                      <span className="ml-2 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <>
              <div className="border-b pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar src={selectedConversation.avatar} alt={selectedConversation.customer} size="sm" />
                  <div>
                    <h2 className="text-xl font-semibold">{selectedConversation.customer}</h2>
                    <p className="text-sm text-gray-500">Last active 2h ago</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {selectedConversation.messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'farmer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.sender === 'farmer' 
                          ? 'bg-green-100 text-green-900' 
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs mt-1 text-gray-500">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a conversation to start chatting
            </div>
          )}
        </div>
      </div>

      {/* New Message Modal */}
      {showNewMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">New Message</h3>
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full p-2 border rounded-lg mb-4"
            />
            <div className="space-y-3">
              {/* Sample recent customers - replace with actual data */}
              <div className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded">
                <Avatar src="https://example.com/avatar3.jpg" size="sm" />
                <span className="ml-3">Fresh Mart Kigali</span>
              </div>
              <div className="flex items-center p-2 hover:bg-gray-50 cursor-pointer rounded">
                <Avatar src="https://example.com/avatar4.jpg" size="sm" />
                <span className="ml-3">Organic Foods Co</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowNewMessageModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FarmerMessages;