import {useState} from "react";
import {Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import {useMessagesContext} from "../Contexts/Messages.context";
import {Message} from "../Contexts/Messages.types";
import {useDisplayNameContext} from "../Contexts/UserContext";
import produce from "immer";

const AddMessage = () => {
  const { displayName } = useDisplayNameContext()
  const [message, setMessage] = useState<Message>({ body: '', private: false, from: displayName});
  const [error, setError] = useState('');
  const { actions } = useMessagesContext()

  return (
    <Grid item container style={{ padding: '24px 58px', width: '100%' }}>
      { error && <Typography>{error}</Typography> }
      <Grid item sm={10} style={{  paddingRight: 24 }}>
        <TextField
          style={{ width: "100%" }}
          color={"secondary"}
          id="send-message"
          label="Enter your Message"
          variant="outlined"
          value={message.body}
          onChange={e => {setMessage(m => produce(m, draft => {draft.body = e.target.value}))}}
          multiline={true}
          minRows={5}
        />
      </Grid>
      <Grid item sm={2} >
        <Grid container>
          <Button variant="contained" color="secondary" style={{ width: '100%' }} onClick={e => {
            if (message.private && message.to === '') setError('please select a recipient')
            else actions?.postMessage(message)
          }}>
            Send
          </Button>
        </Grid>
        <Grid container>
          <FormControlLabel
            control={<Checkbox checked={message.private} onChange={() => setMessage(m => produce(m, draft => {draft.private = !m.private}))} />}
            label="Private"
          />
        </Grid>
        {
          message.private && <TextField
              style={{  width: "100%" }}
              color={"secondary"}
              id="recipient"
              label="Recipient"
              value={message.to}
              onChange={e => setMessage(m => produce(m, draft => {draft.to = e.target.value}))}
          />
        }
      </Grid>
    </Grid>
  )
}

export default AddMessage