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
            <Route path="/TransmuteAI" exact component={Home} />
            <Route path="/TransmuteAI/joinus" component={JoinUs} />
            <Route path="/TransmuteAI/rishab" component={Rishab} />
            <Route path="/TransmuteAI/udbhav" component={Udbhav} />
            <Route path="/TransmuteAI/deepanshu" component={Deepanshu} />
            <Route path="/TransmuteAI/bryan" component={Bryan} />
            <Route path="/TransmuteAI/arnav" component={Arnav} />
            <Route path="/TransmuteAI/deepak" component={Deepak} />
            <Route path="/TransmuteAI/chipnets" component={ChipNet} />
            <Route path="/TransmuteAI/rescaling" component={Rescaling} />
            <Route path="/TransmuteAI/generating" component={Generating} />
            <Route path="/TransmuteAI/publications" component={Publications} />
          </Switch>
        </Router>
      </div>
    );
  }
}
