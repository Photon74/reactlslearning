import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, TextField } from '@mui/material'
import { Button } from '../Button/Button';
import { initChats, chats } from '../../constants';
import { nanoid } from 'nanoid'
import { Form } from '../Form/Form';
import { Link, useParams } from 'react-router-dom';

export function ChatList() {
  const [inputText, setInputText] = useState('')
  const [chatList, setChatList] = useState(chats);
  const { chatId } = useParams()

  const handleSubmit = (e) => {
    e.preventDefault()
    setChatList([...chatList, { id: nanoid(), name: inputText }])
    setInputText('')
  }

  return (
    <>
      <h1>Chat List</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Add chat"
          id="outlined-size-small"
          size="small"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type='submit'>Add chat</Button>
      </form>
      <List>
        {chatList.map(item =>
          <Link to={`/chats/${item.id}`} key={item.id}>
            <ListItem>
              <ListItemText primary={[chatList.indexOf(item) + 1, '. ', item.name]} />
            </ListItem>
          </Link>
        )
        }
      </List>
    </>
  )
}