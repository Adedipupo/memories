import React,{useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


function App() {
  const [currentId,setCurrentId] = useState(null);
  const classes  = useStyles( );
 const dispatch = useDispatch(); 


 useEffect(() => {
  dispatch(getPosts())
 }, [currentId ,dispatch]);
  return (
    <Container maxWidth='lg'>
      <Navbar />
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
    </Container>
  );
}

export default App;
