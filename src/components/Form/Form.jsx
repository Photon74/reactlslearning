import { useEffect, useState } from "react"
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import ITextField from '@mui/material/TextField';

import styles from './Form.module.css'

export function Form({ addMessage }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addMessage({
      author: 'author',
      text
    })
    setText('')
  }



  return (
    <>
      <h1> Form </h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          {/* <TextField
            label="Your message"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></TextField> */}
          <ITextField
            inputRef={input => input && input.focus()}
            label="Your message"
            id="outlined-size-small"
            size="small"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <Button type='submit'>Send message</Button>
        </div>
      </form>
    </>
  )
}