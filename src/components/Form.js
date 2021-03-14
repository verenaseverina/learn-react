import React, { Component } from "react";

class Form extends Component {
  state = {
    ...this.returnListPosts(),
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };
  returnListPosts() {
    if (this.props.currentIndex === -1) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const today = new Date();
      const todayFix = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()} ${today.getHours()}:${today.getMinutes() < 10 ? "0" : ""}${today.getMinutes()}`;
      return {
        author: "",
        description: "",
        category: "",
        date: todayFix,
      };
    } else {
      return this.props.list[this.props.currentIndex];
    }
  }
  componentDidUpdate(prev) {
    if (prev.currentIndex !== this.props.currentIndex || prev.list.length !== this.props.list.length) {
      this.setState({ ...this.returnListPosts() });
    }
  }
  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  inputSubmit = (e) => {
    e.preventDefault();
    if (!this.state.author || this.state.author.length > 20 || this.state.author.indexOf(" ") < 1) {
      alert("Author Name is Invalid");
      return;
    } else if (this.state.description > 100 || !this.state.description) {
      alert("Description is Invalid");
      return;
    } else if (this.state.category === "") {
      alert("Category is Invalid");
      return;
    } else {
      this.props.onAddOrEdit(this.state);
    }
  };
  render() {
    return (
      <div>
        <h2>Input Post</h2>
        <form onSubmit={this.inputSubmit}>
          <div>
            <input type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.inputChange}></input>
          </div>
          <div>
            <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.inputChange}></input>
          </div>
          <div>
            <select value={this.state.category} name="category" onChange={this.inputChange}>
              <option>Select One</option>
              <option value="Article">Article</option>
              <option value="Blog">Blog</option>
            </select>
          </div>
          <div>
            <input type="text" name="date" value={this.state.date} disabled></input>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
