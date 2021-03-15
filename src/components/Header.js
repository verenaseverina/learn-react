import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="form-post">
        <Link to={"/"}>
          <button>Post List</button>
        </Link>
        <Link to={"add-post"}>
          <button>Add Post Form</button>
        </Link>
      </div>
    );
  }
}

export default Header;
