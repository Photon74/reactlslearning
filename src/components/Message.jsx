import { useState } from "react"

export function Message(props) {
  const [author, setAuthor] = useState(props.author)
  const [text, setText] = useState(props.messageText)

  return (
    <>
      <h2>{ }</h2>
    </>
  )
}