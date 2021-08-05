import React from 'react'
import { AppBar,Typography } from '@material-ui/core'
import useStyles from './styles';


const Navbar = () => {
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant='h4' align='center'>Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="80" />
      </AppBar>
    )
}

export default Navbar
