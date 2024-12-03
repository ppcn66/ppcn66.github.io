import React from "react";
import { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // เพิ่มข้อความใหม่ในแชท
    const newMessage = {
      text: input,
      sender: messages.length % 2 === 0 ? "user1" : "user2",
    };
    setMessages([...messages, newMessage]);
    setInput(""); // ล้างช่องพิมพ์
  };

  return (
    <div className="main-admin">
        <h1 className="chat-title">Chat</h1>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user1" ? "user1-message" : "user2-message"
              }`}
            >
              <span className="message-text">{message.text}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
