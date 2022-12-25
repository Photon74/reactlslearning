import IButton from '@mui/material/Button'

export function Button(props) {
  return (
    <>
      <IButton
        type={props.type}
        variant="contained"
        size="small"
      >
        {props.children}
      </IButton>
    </>
  )
}