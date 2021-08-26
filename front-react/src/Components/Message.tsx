import {Message} from "../Contexts/Messages.types";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import {useDisplayNameContext} from "../Contexts/UserContext";

interface Props {
  message: Message
}

const useShowMessageStyles = makeStyles({
  card: (({isRight}: {isRight: boolean}) => ({ margin: 24, marginLeft: isRight ? 'auto' : 24 }))

})

export const ShowMessage = ({ message }: Props) => {
  const { displayName } = useDisplayNameContext()
  const { card } = useShowMessageStyles({isRight: displayName === message.from})

  return (
    <Card variant="outlined" className={card} >
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          {message.from}
        </Typography>
        <Typography variant="h5" component="h2">
          {message.body}
        </Typography>
      </CardContent>
    </Card>
  )
}