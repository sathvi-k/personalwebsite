import React from 'react';
import '../style.scss';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Nav from './navbar';
import About from './about';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';

const FallBack = (props) => {
  return <div>That page doesn&apos;t exist!</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
