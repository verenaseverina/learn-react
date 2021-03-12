import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import ListPost from './containers/ListPost/ListPost'
import CreatePost from './containers/CreatePost/CreatePost'
import Header from './components/Header/Header'
import React, { Component } from 'react'

class App extends Component {
  state = {
    listPost: [
      {
        author: 'Ghozi',
        desc : 'Hello Guys this is my first post',
        dateTime: '21 Feb 2021 11:00 PM',
        category: 'Science'
      },
      {
        author: 'Jeffrey',
        desc : 'Secondary post for testing post',
        dateTime: '22 Feb 2021 15:00 PM',
        category: 'Philosophy'
      },
      {
        author: 'Garin',
        desc : 'Third post for testing post',
        dateTime: '01 March 2021 08:00 AM',
        category: 'Physics'
      }
    ]
  }

  handleEdit = (index, post) => {
    const {listPost} = this.state
    // const newPost = {}
  }

  deletePost = (index) => {
    const {listPost} = this.state
    this.setState({
      listPost: listPost.filter((post,idx) => {
        return idx !== index
      } )
    })
  }

  handleSubmit = (post) => {
    this.setState({
      listPost: [...this.state.listPost, post]
    })
  }

  render() {
    const {listPost} = this.state

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <ListPost postData={listPost} removePost={this.deletePost} />
          </Route>
          <Route path="/createPost">
            <CreatePost handleSubmit={this.handleSubmit} />
          </Route>
        </Switch>
    </div>
    )
  }
}

export default App


