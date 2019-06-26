import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonLarge: {
    margin: theme.spacing(1),
    fontSize: '50px',
    padding: '0 50px',
  },
  input: {
    display: 'none',
  },
}));

export default function App() {
    const classes = useStyles();

    return (
      <Container maxWidth="sm" className={classes.container}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                600
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={classes.paper}>
                <Button size="large" variant="contained" color="primary" className={classes.buttonLarge}>
                  - 1
                </Button>
                <Button size="large" variant="contained" color="primary" className={classes.buttonLarge}>
                  -5
                </Button>
                <Button size="large" variant="contained" color="primary" className={classes.buttonLarge}>
                  -10
                </Button>
                <Button size="large" variant="contained" color="primary" className={classes.buttonLarge}>
                  -20
                </Button>
                <Button size="large" variant="contained" color="primary" className={classes.buttonLarge}>
                  -50
                </Button>
                
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary" className={classes.button}>
                    +1
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  +5
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  +10
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  +20
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                  +50
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }



