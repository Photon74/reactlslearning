import { useParams } from "react-router-dom"

export function MessageList({ messages }) {
  const chatId = useParams()

  return (
    <>
      <h1>Messages</h1>
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message.text}</li>
        ))}
      </ul>
    </>
  )
}