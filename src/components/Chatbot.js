import { useState } from "react";
import "./Chatbot.css"; // Add styling

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="chatbot-container">
      <button className="chat-icon" onClick={() => setOpen(!open)}>💬</button>
      {open && (
        <div className="chat-box">
          <p>Welcome! How can I help you?</p>
          <input type="text" placeholder="Type a message..." />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
