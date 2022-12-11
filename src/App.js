import { useEffect, useState } from "react"
import { Form } from "./components/Form/Form"
import { MessageList } from "./components/MessageList/MessageList"

import './App.css'

export function App(){
    const[messages, setMessages] = useState([])

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }

    useEffect(() =>{
        if(messages.length > 0 && messages.at(-1).author !== 'bot'){
            setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: 'Hello! I am Bot' 
                })
            }, 1500);
        }
    },[messages])

    return (
        <>
        <div className="App-header">
            <h1>Chatrooms</h1>
        </div>
        <hr />
            <Form addMessage={addMessage}/>
            <MessageList messages={messages}/>
        </>
    )
}