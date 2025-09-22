import { useState } from 'react'
import './App.css'
import ChatbotInput from './ChatbotInput'
import Chatbotbody from './Chatbotbody'
import ChatbotMessages from './ChatbotMessages'

function App() {

  return (
    <>
      <ChatbotInput/>
      <div id='chatbot-body'>
        <ChatbotMessages />
      </div>
    </>
  )
}

export default App
