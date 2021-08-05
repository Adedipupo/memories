import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {

  return (
    <BrowserRouter>
      <Container maxWidth='lg'>
        <Navbar />
        <Switch>
          <Route path="/" exact/>
        </Switch>
        <Home />
      </Container>
    </BrowserRouter>
  );
}

export default App;
