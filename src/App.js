import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/aboutme' component={AboutMe} exact />
          <Route path='/404' component={NotFoundPage} exact />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
