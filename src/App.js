import "./App.css";

import { useEffect, useState } from "react";

import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { Header } from "./components/Header/Header";
import { ChatList } from "./components/Chat/ChatList";

import { AppBar, Box, Divider, Grid } from "@mui/material";

export function App() {
  const [messages, setMessages] = useState([]);
  const [chatList, setChatList] = useState([
    { id: 1, name: "Default" },
    { id: 2, name: "Help" },
    { id: 3, name: "Ask Us" },
  ]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messages.length > 0 && messages.at(-1).author !== "bot") {
      setTimeout(() => {
        addMessage({
          author: "bot",
          text: "Hello! I am Bot",
        });
      }, 1500);
    }
  }, [messages]);

  return (
    <Box maxWidth={1920}>
      <AppBar position="static" r>
        <Header></Header>
        <Divider />
      </AppBar>
      <div className="container">
        <div className="chatlist">
          <ChatList list={chatList} />
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
    </Box>
  );
}
