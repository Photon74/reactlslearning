import { List, ListItem, ListItemText } from '@mui/material'

export function ChatList({ list }) {
  return (
    <>
      <h1>Chat List</h1>
      <List>
        {list.map(item =>
          <ListItem key={item.id}>
            <ListItemText primary={[list.indexOf(item) + 1, '. ', item.name]} />
          </ListItem>
        )
        }
      </List>
    </>
  )
}