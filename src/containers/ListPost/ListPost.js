import React, { Component } from 'react'
import styles from './ListPost.module.css'
import {useHistory, withRouter} from 'react-router-dom'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Post Author</th>
                <th>Post Desc</th>
                <th>Post Date</th>
                <th>Post Category</th>
                <th>Configuration</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const history = useHistory()

    const rows = props.post.filter((data)=>{
        if(props.search == null)
            return data
        else if(data.desc.toLowerCase().includes(props.search.toLowerCase()) || data.author.toLowerCase().includes(props.search.toLowerCase())){
            return data
        }
      }).map((p) => {
        return (
            <tr key={p.index}>
                <td>{p.author}</td>
                <td>{p.desc}</td>
                <td>{p.dateTime}</td>
                <td>{p.category}</td>
                <td style={{display: "flex", justifyContent:"space-around"}}>
                    <button onClick={props.redirect.bind(this, p)}>Edit</button>
                    <button onClick={() => props.delPost(p.index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class ListPost extends Component {
    state = {
        search: ''
    }

    searchSpace = (event) =>{
        let keyword = event.target.value;
    
        this.setState({
            search:keyword
        })
    }

    redirectEditPost = (post) => {
        const {history} = this.props
        history.push({
            pathname: '/createPost',
            state: {
                idx: post.index,
                author: post.author,
                desc: post.desc,
                dateTime: post.dateTime,
                category: post.category
            }
        })
    }

    render() {
        const {postData, removePost} = this.props

        return (
            <div className={styles.listPost}>
                <h1>List Post</h1>
                <div className={styles.filterArea}>
                    <input id="search" name="search" type="text" placeholder="search desc or author"
                    onChange={(e) => this.searchSpace(e)}/>
                </div>    
                <div className={styles.tableArea}>
                    <table>
                        <TableHeader />
                        <TableBody post={postData} delPost={removePost} search={this.state.search} 
                        redirect={this.redirectEditPost}/>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ListPost)
