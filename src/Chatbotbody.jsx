import React from "react";
import "./Chatbotbody.css";
import userImage from "../public/user.png"
import chatbotImage from "../public/chatbot.png"


function Chatbotbody(props) {
    const {message, sender} = props;
    return(
        <>
            <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-chatbot'}>
                <div className="chat-message-item">
                    {sender === "chatbot" && <img className="message-image" src={chatbotImage}/>}
                    <div className="chat-message">
                         {message}
                    </div>
                    {sender === "user" && <img className="message-image" src={userImage}/>}
                </div>
            </div>
        </>
    )
}

export default Chatbotbody; 