import { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import JoinUs from "./JoinUs";
import Publications from "./Publications";
import Rescaling from "./Rescaling";
import Generating from "./Generating";
import ChipNet from "./ChipNet";
import Deepak from "./Deepak";
import Arnav from "./Arnav";
import Bryan from "./Bryan";
import Deepanshu from "./Deepanshu";
import Udbhav from "./Udbhav";
import Rishab from "./Rishab";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/software" component={JoinUs} />
            <Route path="/rishab" component={Rishab} />
            <Route path="/udbhav" component={Udbhav} />
            <Route path="/deepanshu" component={Deepanshu} />
            <Route path="/bryan" component={Bryan} />
            <Route path="/arnav" component={Arnav} />
            <Route path="/Deepak" component={Deepak} />
            <Route path="/chipnets" component={ChipNet} />
            <Route path="/rescaling" component={Rescaling} />
            <Route path="/generating" component={Generating} />
            <Route path="/publications" component={Publications} />
          </Switch>
        </Router>
      </div>
    );
  }
}
