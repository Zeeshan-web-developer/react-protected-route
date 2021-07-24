import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Nav from "./Nav";

function App() {
  const auth = true;
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <button>Login</button>
          <button>Logout</button>
        </Route>
        <Route
          exact
          path="/landing"
          render={(props) => <Landing onSucess={"true"} {...props} />}
        />
        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isAuth={auth}
        />
      </Switch>
    </Router>
  );
}

export default App;
