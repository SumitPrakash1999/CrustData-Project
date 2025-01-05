import React, { useState } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import { fetchChatResponse } from "../api/chatApi";

function ChatBox() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async (message) => {
    // Add user message to chat history
    setChatHistory([...chatHistory, { sender: "user", text: message }]);

    try {
      // Fetch bot response
      const response = await fetchChatResponse(message);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", text: response.answer },
      ]);
    } catch (error) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", text: "An error occurred. Please try again." },
      ]);
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {chatHistory.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatBox;
