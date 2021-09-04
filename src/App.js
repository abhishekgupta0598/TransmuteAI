import { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import JoinUs from "./JoinUs";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/software" component={JoinUs} />
          </Switch>
        </Router>
      </div>
    );
  }
}
