import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography
} from "@material-ui/core";
import {ShowMessage} from "./Message";
import {useEffect, useState} from "react";
import {useMessagesContext} from "../Contexts/Messages.context";
import {useDisplayNameContext} from "../Contexts/UserContext";
import { uniq } from 'lodash'

const useStyles = makeStyles({
  leftSide: { width: '100%', borderLeft: '1px solid rgba(0, 0, 0, 0.12)', maxHeight: '70vh', overflow: 'scroll'},
  listItem: { marginBottom: 12, border: '1px solid rgba(0, 0, 0, 0.12)' }
})

export default () => {
  const { leftSide, listItem } = useStyles({})
  const { displayName } = useDisplayNameContext()
  const { privateMessages, actions } = useMessagesContext()
  const [selectedDisplayName, setSelectedDisplayName ] = useState('')

  const listSender: string[] = uniq([...privateMessages.map(m => m.from || ''), ...privateMessages.map(m => m.to || '')])
    .filter(sender => sender !== '' && sender !== displayName)

  useEffect(() => {
    actions?.getPrivateMessages(displayName)
  }, [])

  return (
    <Grid container style={ { width: '100%'}} >
      <Grid item sm={4} style={ { width: '100%'}}>
        <List component="nav" aria-label="main mailbox folders">
        { listSender.map(sender => <>
            <ListItem button onClick={() => setSelectedDisplayName(sender)} className={listItem}>
              <ListItemText primary={sender} />
            </ListItem>
        </>
        )}
        </List>
      </Grid>
      <Grid item sm={8} className={leftSide}>
        {selectedDisplayName !== '' &&
          privateMessages
            .filter(m => m.from === selectedDisplayName || m.to === selectedDisplayName)
            .map(message => <Grid container><ShowMessage message={message} /></Grid>)}
      </Grid>
    </Grid>
  )
}