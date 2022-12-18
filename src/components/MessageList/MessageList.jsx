import { render } from "react"

export function MessageList({ messages }) {
  return (
    <>
      <h1>Messages List</h1>
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message.text}</li>
        ))}
      </ul>
    </>
  )
}