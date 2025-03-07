import React from "react";
import "./Message.css";

function Message({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
}

export default Message;
