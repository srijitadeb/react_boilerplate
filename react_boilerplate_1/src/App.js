
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./Components/Home/home";
import About from "./components/About/about";
import Navigation from "./components/Navigation/navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            {/* <Route component={Error} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 