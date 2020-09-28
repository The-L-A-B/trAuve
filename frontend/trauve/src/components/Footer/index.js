import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Container, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#303B97',
    color: '#CCCCCC',
    height: '20vh',
    width: '100vw',
  },
  container: {
    maxHeight: '10vh',
  },
  divider: {
    width: '80%',
    margin: 'auto',
  },
  love: {
    fontSize: '0.5rem',
  },
});

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const classes = useStyles();

  return (
    <Grid container alignItems='flex-end' className={classes.root}>
      <Grid container item xs={12} spacing={2} alignItems='stretch'>
        <Grid item sm xs={12} align='center'>
          <Container className={classes.container}>nav links</Container>
        </Grid>
        <Divider
          flexItem={matches}
          orientation={matches ? 'vertical' : 'horizontal'}
          className={matches ? null : classes.divider}
        />
        <Grid item sm xs={12} align='center'>
          <Container className={classes.container}>
            school contact info
          </Container>
        </Grid>
      </Grid>
      <Grid item xs={12} align='center'>
        <Typography variant='overline' gutterBottom className={classes.love}>
          Made with ♡ by L.A.B.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
