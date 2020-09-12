//React Components and Hooks
import React from 'react';
//Material UI Components
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Header from '../../components/Header';

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    color: 'black',
  },
});

const Login = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <Paper className={classes.root}>
        <TextField id='outlined-basic' label='USERNAME' variant='outlined' />
        <TextField
          id='outlined-password-input'
          label='PASSWORD'
          type='password'
          autoComplete='current-password'
          variant='outlined'
        />
      </Paper>
    </div>
  );
};
export default Login;
