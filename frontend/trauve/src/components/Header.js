import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#FFC93C',
    color: 'black',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography>TrAuve</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
