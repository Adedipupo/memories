import React,{useState, useEffect} from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import {getPosts} from './actions/posts';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {

  return (
    <Container maxWidth='lg'>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;
