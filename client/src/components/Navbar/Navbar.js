import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
  <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
            Memories
            <img className={classes.image} src={memories} alt="memories" height="60" />
      </Typography>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.avatar.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
              <Typography className={classes.userName} variant="h6">
                {user.result.name}
              </Typography>
              <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
            </Avatar>
          </div>
        ):(
           <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button> 
        )}

      </Toolbar>
    </div>
  </AppBar>
  )
}

export default Navbar

