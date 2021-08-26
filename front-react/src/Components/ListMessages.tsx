import {useMessagesContext} from "../Contexts/Messages.context";
import {useEffect} from "react";
import {ShowMessage} from "./Message";
import {Grid} from "@material-ui/core";

interface Props {
}

export default (props: Props) => {
  const { publicMessages, actions } = useMessagesContext()

  useEffect(() => {
    actions?.getPublicMessages()
  }, [])

  return (
    <Grid container style={{ maxHeight: '70vh', overflow: 'scroll' }}>
      {publicMessages.map(message => <Grid container><ShowMessage message={message} /></Grid>)}
    </Grid>
  )
}
