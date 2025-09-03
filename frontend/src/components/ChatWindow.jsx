import React from "react";

function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div key={idx} className={msg.sender === "You" ? "user-msg" : "bot-msg"}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatWindow;