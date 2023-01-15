import { useEffect } from "react";
import { useState } from "react";
import { useParams, redirect } from "react-router-dom";
import { ChatList } from "../components/Chat/ChatList"
import { NoChat } from "../components/Chat/NoChat";
import { Form } from "../components/Form/Form"
import { MessageList } from "../components/MessageList/MessageList"

import { AUTHOR } from "../constants";

export function ChatPage() {
  const [messages, setMessages] = useState([])
  const { chatId } = useParams()

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  useEffect(() => { // сообщение бота
    if (messages.length > 0 && messages.at(-1).author !== "bot") {
      setTimeout(() => {
        addMessage({
          author: "bot",
          text: "Hello! I am Bot",
        });
      }, 1500)
    }
  }, [messages])

  useEffect(() => {
    if (chatId === undefined) {
      setMessages([])
    }
  }, [chatId])

  // if (chatId === undefined) return redirect("/nochat")

  return (
    <>
      <div className="container">
        <div className="chatlist">
          <ChatList />
        </div>
        <div className="chat">
          <div className="form">
            <Form addMessage={addMessage} />
          </div>
          <div className="messages">
            <MessageList messages={messages} />
          </div>
        </div>
      </div>
    </>
  )
}