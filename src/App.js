import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Details from './components/Details'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
      
      
    </>
  );
}

export default App;
