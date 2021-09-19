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
import Courses from "./Courses";
import Members from "./Members";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/TransmuteAI" exact component={Home} />
            <Route path="/TransmuteAI/joinus" component={JoinUs} />
            <Route path="/TransmuteAI/courses" component={Courses} />
            <Route path="/TransmuteAI/members" component={Members} />
            <Route path="/TransmuteAI/publications/rishab" component={Rishab} />
            <Route path="/TransmuteAI/publications/udbhav" component={Udbhav} />
            <Route
              path="/TransmuteAI/publications/deepanshu"
              component={Deepanshu}
            />
            <Route path="/TransmuteAI/publications/bryan" component={Bryan} />
            <Route path="/TransmuteAI/publications/arnav" component={Arnav} />
            <Route path="/TransmuteAI/publications/deepak" component={Deepak} />
            <Route
              path="/TransmuteAI/publications/chipnets"
              component={ChipNet}
            />
            <Route
              path="/TransmuteAI/publications/rescaling"
              component={Rescaling}
            />
            <Route
              path="/TransmuteAI/publications/generating"
              component={Generating}
            />
            <Route path="/TransmuteAI/publications" component={Publications} />
          </Switch>
        </Router>
      </div>
    );
  }
}
