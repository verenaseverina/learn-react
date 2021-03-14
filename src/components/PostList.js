import React, { Component } from "react";
import Form from "./Form";
import FormFilter from "./FormFilter";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class PostList extends Component {
  state = {
    currentIndex: -1,
    list: this.returnList(),
    search: "",
  };
  returnList() {
    if (localStorage.getItem("posts") == null) {
      localStorage.setItem("posts", JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem("posts"));
  }
  onAddOrEdit = (data) => {
    var list = this.returnList();
    if (this.state.currentIndex === -1) {
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
  setSearch = (data) => {
    this.setState({
      search: data,
    });
  };
  render() {
    return (
      <Router>
        <Header />
        <div className="form-post">
          <Switch>
            <Route exact path="/add-post">
              <Form onAddOrEdit={this.onAddOrEdit} currentIndex={this.state.currentIndex} list={this.state.list} />
            </Route>
            <Route path="/">
              <h1>Post List</h1>
              <FormFilter setSearch={this.setSearch} />
              {this.state.list
                .filter((blog) => {
                  if (this.state.search === "") {
                    return blog;
                  } else if (blog.category.toLowerCase().includes(this.state.search.toLowerCase())) {
                    return blog;
                  }
                })
                .map((blog, index) => (
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
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default PostList;
