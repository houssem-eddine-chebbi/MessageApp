import {Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';

const useLoginStyles = makeStyles({
  container: { width: '100%', height: '100%' },
  item: { padding: 24, margin: 'auto' },
  paper: { padding: 24 },
  textField: { width: '100%' },
  title: { textAlign: 'center' },
  icone: { width: 250, height: 250, color: 'red' },
  center: { margin: 'auto', padding: '0 50px' },
})

export default () => {
  const { container, item, paper, textField, title, icone, center } = useLoginStyles({})

  return (
    <Grid container className={container}>
      <Grid item className={item} >
        <Paper elevation={3} className={paper}>
          <Typography variant="h4" className={title} gutterBottom>
            Messages App
          </Typography>
          <Grid item className={center} ><ChatIcon className={icone} /></Grid>
          <TextField className={textField} id="outlined-basic" label="Enter your display Name" variant="outlined" />
        </Paper>
      </Grid>
    </Grid>
  )
}