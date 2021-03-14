import React, { Component } from "react";

class FormFilter extends Component {
  setSearchP = (e) => {
    console.log(e.target.value);
    this.props.setSearch(e.target.value);
  };
  render() {
    return <input type="text" name="search" placeholder="Search Category" onChange={this.setSearchP} />;
  }
}

export default FormFilter;
