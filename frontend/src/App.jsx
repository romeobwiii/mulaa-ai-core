import React, { useState } from "react";
import axios from "axios";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  const [messages, setMessages] = useState([
    { sender: "Mulaa", text: "Hello! I'm Mulaa 🤖. Ask me something!" }
  ]);

  const sendMessage = async (text) => {
    const newMsg = { sender: "You", text };
    setMessages([...messages, newMsg]);

    try {
      const res = await axios.post("http://localhost:5000/ask", { question: text });
      const botMsg = { sender: "Mulaa", text: res.data.answer };
      setMessages([...messages, newMsg, botMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app">
      <h1>Mulaa Assistant</h1>
      <ChatWindow messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}

export default App;