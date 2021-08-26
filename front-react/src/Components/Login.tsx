import {Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import {useDisplayNameContext} from "../Contexts/UserContext";

const useLoginStyles = makeStyles({
  container: { width: '100%', height: '100%' },
  item: { padding: 24, margin: 'auto' },
  paper: { padding: 24 },
  textField: { width: '100%' },
  title: { textAlign: 'center' },
  icone: { width: 250, height: 250 },
  center: { margin: 'auto', padding: '0 50px' },
})

export default () => {
  const { displayName, setDisplayName } = useDisplayNameContext()
  const { container, item, paper, textField, title, icone, center } = useLoginStyles({})

  return (
    <Grid container className={container}>
      <Grid item className={item} >
        <Paper elevation={3} className={paper}>
          <Typography variant="h4" className={title} gutterBottom>
            Messages App
          </Typography>
          <Grid item className={center} ><ChatIcon className={icone} color={"secondary"} /></Grid>
          <TextField
            color={"secondary"}
            className={textField}
            id="outlined-basic"
            label="Enter your display Name"
            variant="outlined"
            value={displayName}
            onChange={e => {setDisplayName && setDisplayName(e.target.value)}}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}