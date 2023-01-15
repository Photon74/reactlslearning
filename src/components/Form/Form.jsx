import { useState } from "react"
import { Button } from "../Button/Button";
import ITextField from '@mui/material/TextField';

import styles from './Form.module.css'
import { AUTHOR } from "../../constants";

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: AUTHOR.user,
      text
    })
    setText('')
  }

  return (
    <>
      <h1> Form </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <ITextField
          inputRef={input => input && input.focus()}
          label="Your message"
          id="outlined-size-small"
          size="small"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button type='submit'>Send message</Button>
      </form>
    </>
  )
}