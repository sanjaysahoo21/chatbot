import { useState } from 'react'
import './App.css'
import ChatbotInput from './ChatbotInput'
import Chatbotbody from './Chatbotbody'
import ChatbotMessages from './ChatbotMessages'

function App() {

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

  return (
    <>
      <ChatbotInput chatMessages={chatMessages} setChatMessages={setChatMessages}/>
      <div id='chatbot-body'>
        <ChatbotMessages chatMessages={chatMessages}/>
      </div>
    </>
  )
}

export default App
