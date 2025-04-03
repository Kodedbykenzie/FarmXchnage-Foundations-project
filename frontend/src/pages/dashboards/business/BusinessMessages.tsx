import React, { useState } from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
// Mock conversation data
const conversations = [
  { id: 1, name: 'John Doe', lastMessage: 'Hi, when will my order be delivered?', timestamp: '2023-10-01 10:30 AM' },
  { id: 2, name: 'Jane Smith', lastMessage: 'Thanks for the quick delivery!', timestamp: '2023-10-02 02:15 PM' },
  { id: 3, name: 'Alice Johnson', lastMessage: 'Can I get a discount on bulk orders?', timestamp: '2023-10-03 09:45 AM' },
];

export function BusinessMessages() {
  interface Conversation {
    id: number;
    name: string;
    lastMessage: string;
    timestamp: string;
  }
  
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<{ id: number; sender: string; text: string; timestamp: string }[]>([]);
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [recipient, setRecipient] = useState('');

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  // Handle starting a new conversation
  const handleNewMessage = () => {
    if (recipient.trim()) {
      const conversation = {
        id: conversations.length + 1,
        name: recipient,
        lastMessage: 'New conversation started',
        timestamp: new Date().toLocaleString(),
      };
      setSelectedConversation(conversation);
      setShowNewMessageModal(false);
      setRecipient('');
    } else {
      alert('Please enter a recipient name.');
    }
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
        <button
          onClick={() => setShowNewMessageModal(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          New Message
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Conversation List */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Conversations</h2>
          <div className="space-y-4">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation)}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedConversation?.id === conversation.id
                    ? 'bg-green-100'
                    : 'hover:bg-gray-100'
                }`}
              >
                <h3 className="font-semibold">{conversation.name}</h3>
                <p className="text-sm text-gray-600">{conversation.lastMessage}</p>
                <p className="text-xs text-gray-500">{conversation.timestamp}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
          {selectedConversation ? (
            <>
              <h2 className="text-lg font-semibold mb-4">Chat with {selectedConversation.name}</h2>
              <div className="h-96 overflow-y-auto mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 ${
                      message.sender === 'You' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.sender === 'You'
                          ? 'bg-green-100 text-green-900'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className="text-xs text-gray-500">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Select a conversation to start chatting.</p>
          )}
        </div>
      </div>

      {/* New Message Modal */}
      {showNewMessageModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">New Message</h2>
            <input
              type="text"
              placeholder="Recipient Name"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowNewMessageModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleNewMessage}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
