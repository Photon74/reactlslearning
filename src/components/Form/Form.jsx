import { useState } from "react"
import { Button } from "../Button/Button"

import styles from './Form.module.css'

export function Form({addMessage}){
    const[text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            author: 'author',
            text
        })
        setText('')
    }

    return(
        <>
            <h1> Form </h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(event) => setText(event.target.value)} 
                    name="" 
                    id="" 
                />
                <Button type="submit">Send message</Button>
            </form>
        </>
    )
}