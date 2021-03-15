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
        desc : 'My First Post, testing dummy data',
        dateTime: '21 Feb 2021 11:00 PM',
        category: 'Science',
        validation: {
          authorValid: false,
          descValid: false
        }
      },
      {
        author: 'Jeffrey',
        desc : 'Secondary post for testing post',
        dateTime: '22 Feb 2021 15:00 PM',
        category: 'Philosophy',
        validation: {
          authorValid: false,
          descValid: false
        }
      },
      {
        author: 'Garin',
        desc : 'Third post for testing post',
        dateTime: '01 March 2021 08:00 AM',
        category: 'Physics',
        validation: {
          authorValid: false,
          descValid: false
        }
      }
    ]
  }

  componentDidMount(){
    //Save into localStorage
    if(localStorage.getItem('listPost') === null){
      localStorage.setItem('listPost', JSON.stringify(this.state.listPost))
    }else{
      const post = JSON.parse(localStorage.getItem('listPost'))
      this.setState({
        listPost: post
      })
    }

    // localStorage.removeItem('listPost')

    //Remove Item (Debugging Mode)
    // localStorage.removeItem('listPost')
  }

  componentDidUpdate(){
    localStorage.setItem('listPost', JSON.stringify(this.state.listPost))
  }

  handleEdit = (index, post) => {
    this.setState( state => {
      const newPost = state.listPost.map((pos, idx) => {
        if(index === idx) {
          pos.author = post.author
          pos.desc = post.desc
          pos.dateTime = post.dateTime
          pos.category = post.category
          return pos
        }else{
          return pos
        }
      })      
      return {
        listPost: newPost
      }
    }) 
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
            <CreatePost handleSubmit={this.handleSubmit} handleEdit={this.handleEdit}/>
          </Route>
        </Switch>
    </div>
    )
  }
}

export default App


