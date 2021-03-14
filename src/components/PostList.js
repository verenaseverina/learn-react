import React, { Component } from "react";
import Form from "./Form";

class PostList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
  };
  returnList() {
    if (localStorage.getItem("posts") == null) {
      localStorage.setItem("posts", JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem("posts"));
  }
  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex == -1) {
      list.push(data);
      localStorage.setItem("posts", JSON.stringify(list));
      this.setState({ list, currentIndex: -2 });
    } else {
      list[this.state.currentIndex] = data;
      localStorage.setItem("posts", JSON.stringify(list));
      this.setState({ list, currentIndex: -1 });
    }
  };
  onEdit = (index) => {
    this.setState({
      currentIndex: index,
    });
  };
  render() {
    return (
      <div className="form-post">
        <Form onAddOrEdit={this.onAddOrEdit} currentIndex={this.state.currentIndex} list={this.state.list} />
        <h1>Post List</h1>
        {this.state.list.map((blog, index) => (
          <div key={index} className="blog-post">
            <div className="title">
              <div>
                <h3>
                  {blog.author} - {blog.category}
                </h3>
              </div>
              <div>
                <button onClick={() => this.onEdit(index)}>Edit</button>
              </div>
            </div>
            <p>
              {blog.description}
              <small> - {blog.date}</small>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostList;
