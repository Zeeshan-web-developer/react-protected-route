import React from "react";
import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ isAuth, component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (isAuth) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{ pathname: "/", state: { from: props.location } }}
              />
            );
          }
        }}
      />
    </div>
  );
}

export default ProtectedRoute;
