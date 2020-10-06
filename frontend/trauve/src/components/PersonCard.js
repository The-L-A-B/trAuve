import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import defaultProfile from '../assets/defaultProfile.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    maxWidth: 345,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    display: 'flex',
  },
  cover: {
    width: 151,
    height: 151,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const PersonCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            Sally Teacher
          </Typography>
          <Typography variant='body2' component='h3'>
            Department
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Short quote (“I am delighted to be able to combine so many of my
            interests into one magnificent job.”)
          </Typography>
        </CardContent>
      </div>
      <CardActionArea className={classes.image}>
        <CardMedia
          className={classes.cover}
          component='img'
          alt='default profile'
          height='140'
          image={defaultProfile}
          title='Default Profile'
        />
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size='small' color='primary'>
          View Website
        </Button>
        <Button size='small' color='primary'>
          Email@email.com
        </Button>
      </CardActions>
    </Card>
  );
};

export default PersonCard;
