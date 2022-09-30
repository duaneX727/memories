import React, {useState} from 'react';
import { Avatar, Button, Paper,Grid,Typography,Container, TextField } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
const Auth = () => {
  const isSignUp = false;
  const classes = useStyles();
  const [showPassword,setShowPassword] = useState(false);
  const handleShowPassword = () => {

  }
  const handleSubmit = () => setShowPassword(prevShowPassword => !prevShowPassword);

  
  const handleChange = () => {

  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? "Sign Up":"Sign In"}
        </Typography>
        <form  className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                </>
            )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
              { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth