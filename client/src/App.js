import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ErrorBoundary from "./errorboundary";
import "./App.css";
import Configuration from "./components/Configuration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Switch>
            <Route
              path="/health/:id"
              render={match => (
                <Configuration matches={match} {...this.props} />
              )}
            />
            <Route
              exact
              path="/"
              render={match => (
                <Configuration matches={match} {...this.props} />
              )}
            />
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

export default withRouter(App);

