import React from "react";
import { useHistory, Link, withRouter } from "react-router-dom";
function Nav(props) {
  const history = useHistory();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Nav);
