import React, { useState } from "react";
import './chatbotInput.css';

function ChatbotInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState(" ");
    const inputValue = (event) => {
        setInputText(event.target.value);
    }

    const sendMessage = () => {
        const newChatmessages = [...chatMessages,{message:inputText,sender:"user",id: crypto.randomUUID()}];
        setChatMessages(newChatmessages);

        const response = Chatbot.getResponse(inputText);
        
        setChatMessages([...newChatmessages,{message:response,sender:"chatbot",id: crypto.randomUUID()}]);
        

        setInputText(" ");
    }
    return (
        <>  
            <div className="chatbot-container">
                <input className="chat-input" placeholder="say something" onChange={inputValue} value={inputText}/>
                <button className="send-button" onClick={sendMessage}>send</button>
            </div>
        </>
    )
}

export default ChatbotInput;