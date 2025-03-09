import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./ChatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed-bottom m-3 p-3 "
        style={{borderRadius:"50%", width:"60px", backgroundColor:"var(--bs-primary)"}}
      >
        <i className="bi bi-chat-left-dots-fill"></i>
      </button>

      {showChat && (
        <div className="position-fixed bottom-0 end-0 p-3 bg-light border rounded" style={{zIndex:9999}}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </>
  );
};

export default ChatbotComponent;
