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
        <button onClick={() => props.history.push("/landing")}>History</button>
      </ul>
    </div>
  );
}

export default withRouter(Nav);
