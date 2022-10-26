import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../Context/context";

import "./Navbar.css";
function Navbar() {
  const { state } = useContext(StateContext);
  console.log(state.trash)
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/task_vazifa">
        Task({state.tasks.length})
      </Link>
      <Link className="link" to="/trash">
        trash({state.trash.length})
      </Link>
    </nav>
  );
}

export default Navbar;
