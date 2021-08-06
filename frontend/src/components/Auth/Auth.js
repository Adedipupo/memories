import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles.js';
import Input from './Input.js';


const Auth = () => {
    const classes = useStyles();
    const isSignup = false;
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        e.preventDefault()
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
              <Avatar className={classes.avatar}>
                 <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                              <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                </Grid>
              </form>
            </Paper>
        </Container>
    )
}

export default Auth