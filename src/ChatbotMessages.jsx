import React, { useState } from "react";
import Chatbotbody from "./Chatbotbody";

function ChatbotMessages({chatMessages}) {


    // const insertMessages = (newMessage, newSender) => {
    //     const newChat = {
    //         message : newMessage,
    //         sender :newSender,
    //         id : `id${chatMessages.length + 1}`,
    //     };
    //     setChatMessages([...chatMessages, newChat]);
    // }
    // insertMessages("hello","user");


    return (
        <>  
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