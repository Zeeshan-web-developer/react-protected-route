import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./Dashboard";
import Nav from "./Nav";

function App(props) {
  let location = useLocation();
  console.log("location" + location.pathname);
  let isAuth = localStorage.getItem("isAuth");

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          {isAuth && (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: location } }}
            />
          )}
          <button onClick={() => localStorage.setItem("isAuth", true)}>
            Login
          </button>
          <button onClick={() => localStorage.setItem("isAuth", false)}>
            Logout
          </button>
        </Route>

        <ProtectedRoute
          exact
          path="/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        />
      </Switch>
    </>
  );
}

export default App;
