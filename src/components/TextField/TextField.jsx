import ITextField from '@mui/material/TextField';

export function TextField(props) {
  return (
    <ITextField
      label={props.label}
      id="outlined-size-small"
      size="small"
    />
  )
}