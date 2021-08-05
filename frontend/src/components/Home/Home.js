import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';


const Home = () => {
    const classes  = useStyles( );

    return (
        <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home
