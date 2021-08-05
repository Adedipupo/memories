import { Container } from '@material-ui/core';
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
