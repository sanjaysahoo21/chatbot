import React, { useState } from "react";
import Chatbotbody from "./Chatbotbody";

function ChatbotMessages() {
        const [chatMessages, setChatMessages] = useState([
        {
            message : "Hello chatbot",
            sender : "user",
            id : "id1",
        },
        {
            message : "Hello! how can i help you",
            sender : "chatbot",
            id : "id2",
        }, 
        {
            message : "what is today's date",
            sender : "user",
            id : "id3",
        }, 
        {
            message : "21 september 2025",
            sender : "chatbot",
            id : "id4",
        }
    ]);

    // const insertMessages = (newMessage, newSender) => {
    //     const newChat = {
    //         message : newMessage,
    //         sender :newSender,
    //         id : `id${chatMessages.length + 1}`,
    //     };
    //     setChatMessages([...chatMessages, newChat]);
    // }
    // insertMessages("hello","user");

    const newChatMessage = () => {
        setChatMessages([...chatMessages,{message:"hello",sender:"user",id:"id5",}])
    }


    return (
        <>  
            <button onClick={newChatMessage}>add</button>
            {chatMessages.map((ele) => {
                return (
                    <Chatbotbody
                    message={ele.message}
                    sender={ele.sender}
                    id={ele.sender}
                />
                )
            })}
        </>
    )
}

export default ChatbotMessages;