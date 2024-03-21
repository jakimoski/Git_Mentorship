import { useState } from "react";
import closeIcon from "../../../close.png";
import chatbot from "../../../chatbot.png";
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <div className="chatbot-container">
          <div className="chatbot-close" onClick={toggleChatbot}>
            <img src={closeIcon} alt="Close Icon" />
          </div>
          <iframe
            title="Chatbot"
            className="chatbot-iframe"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/0e1b9f3c-b872-4a22-9f97-5ff0e0e63052"
          ></iframe>
        </div>
      ) : (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          <img src={chatbot} alt="Chatbot Icon" width="70" height="70" />
        </div>
      )}
    </div>
  );
}
