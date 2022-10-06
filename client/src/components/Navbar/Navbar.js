import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Typography, Toolbar, Avatar,Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';


const Navbar = () => {
  const classes = useStyles();
  //const user = null;
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useNavigate();
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  }
  useEffect(() => {
    const token = user?.token;
    //JWT ...
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);
  return (
  <AppBar className={classes.appBar} position="static" color="inherit">
    <div className={classes.brandContainer}>
      <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">
            Memories
      </Typography>
      <img className={classes.image} src={memories} alt="memories" height="60" />
    </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
          <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ):(
           <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button> 
        )}
      </Toolbar>
  </AppBar>
  );
};

export default Navbar

