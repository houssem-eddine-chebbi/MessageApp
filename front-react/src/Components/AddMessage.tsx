import {useState} from "react";
import {Button, Checkbox, FormControlLabel, Grid, TextField} from "@material-ui/core";


export default () => {
  const [message, setMessage] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [error, setError] = useState('');

  return (
    <Grid item container style={{ padding: '24px 58px', width: '100%' }}>
      <Grid item sm={10} style={{  paddingRight: 24 }}>
        <TextField
          style={{  width: "100%" }}
          color={"secondary"}
          id="send-message"
          label="Enter your Message"
          variant="outlined"
          value={message}
          onChange={e => {setMessage(e.target.value)}}
          multiline={true}
          minRows={5}
        />
      </Grid>
      <Grid item sm={2} >
        <Grid container>
          <Button variant="contained" color="secondary" style={{ width: '100%' }} >
            Send
          </Button>
        </Grid>
        <Grid container>
          <FormControlLabel
            control={<Checkbox checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />}
            label="Private"
          />
        </Grid>
        {
          isPrivate && <TextField
              style={{  width: "100%" }}
              color={"secondary"}
              id="recipient"
              label="Recipient"
              value={recipient}
              onChange={e => {setRecipient(e.target.value)}}
          />
        }
      </Grid>
    </Grid>
  )
}