import React from "react";
import "./Chatbotbody.css";
import userImage from "../public/user.png"
import chatbotImage from "../public/chatbot.png"

function Chatbotbody(props) {
    const {message, sender} = props;
    return(
        <>
            <div className="chatbot-chat">
                {sender === "chatbot" && <img className="message-image" src={chatbotImage}/>}
                {message}
                {sender === "user" && <img className="message-image" src={userImage}/>}
            </div>
        </>
    )
}

export default Chatbotbody; 