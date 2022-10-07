import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import {AUTH} from '../../constants/actionTypes';
import Icon from "./icon";
import {GoogleLogin} from 'react-google-login';
import env from "react-dotenv";
import { gapi } from "gapi-script";

const Auth = () => {
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        project_id:'mem_app2',
        client_secret: process.env.REACT_APP_SECRET_KEY
    });
    }
  
    gapi.load('client:auth2', start);
  }, []);
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleSuccess = async res => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({type: 'AUTH', data: {result,token}});
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  const googleError = (err) => {console.log('Google Sign In was unsuccessful. Try again later', err)};

  const switchMode = () => {
    setIsSignUp(prevIsSignUp => !prevIsSignUp);
    handleShowPassword(false);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);


  const handleSubmit = () => {}


  const handleChange = () => {}
  return (<Container component="main" maxWidth="xs">
    <Paper className={
        classes.paper
      }
      elevation={3}>
      <Avatar className={
        classes.avatar
      }><LockOutlinedIcon/></Avatar>
      <Typography component="h1" variant="h5"> {
        isSignUp ? "Sign Up" : "Sign In"
      } </Typography>
      <form className={
          classes.form
        }
        onSubmit={handleSubmit}>
        <Grid container
          spacing={2}> {
          isSignUp && (<>
            <Input name="firstName" label="First Name"
              handleChange={handleChange}
              autoFocus
              half/>
            <Input name="lastName" label="Last Name"
              handleChange={handleChange}
              half/>
          </>)
        }
          <Input name="email" label="Email Address"
            handleChange={handleChange}
            type="email"/>
          <Input name="password" label="Password"
            handleChange={handleChange}
            type={
              showPassword ? "text" : "password"
            }
            handleShowPassword={handleShowPassword}/> {
          isSignUp && <Input name="confirmPassword" label="Repeat Password"
            handleChange={handleChange}
            type="password"/>
        } </Grid>
        <Button className={
            classes.submit
          }
          type="submit"
          fullWidth
          variant="contained"
          color="primary"> {
          isSignUp ? 'Sign Up' : 'Sign In'
        } </Button>

        <GoogleLogin 
           clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
           render={
             (renderProps) => (<Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}
             startIcon={<Icon/>}
             variant="contained">
              Google Sign In
            </Button>)}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"/>

        <Grid container justifyContent='center'>
          <Grid item>
            <Button onClick={switchMode}> {
              isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"} 
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  </Container>);
};

export default Auth;
