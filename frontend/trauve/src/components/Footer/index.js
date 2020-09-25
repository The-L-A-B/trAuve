import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grid, Typography, Divider } from '@material-ui/core';

const Footer = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid container item xs={12}>
        <Grid item sm xs={12} align='center'>
          nav links
        </Grid>
        <Divider
          flexItem={matches}
          orientation={matches ? 'vertical' : 'horizontal'}
        />
        <Grid item sm xs={12} align='center'>
          school contact info
        </Grid>
      </Grid>
      <Grid item xs={12} justify='center' align='center'>
        <Typography variant='overline' gutterBottom>
          Made with ♡ by L.A.B.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
