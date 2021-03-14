import React, { Component } from 'react'
import styles from './ListPost.module.css'
import {useHistory} from 'react-router-dom'

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
      }).map((p,index) => {
        return (
            <tr key={index}>
                <td>{p.author}</td>
                <td>{p.desc}</td>
                <td>{p.dateTime}</td>
                <td>{p.category}</td>
                <td style={{display: "flex", justifyContent:"space-around"}}>
                    <button 
                    onClick={({author=p.author, desc=p.desc, dateTime=p.dateTime, category=p.category, idx=index}) => history.push({
                        pathname: '/createPost',
                        state: {
                            index: idx,
                            author: author,
                            desc: desc,
                            dateTime: dateTime,
                            category: category
                        }
                    })}
                    >Edit</button>
                    <button onClick={() => props.delPost(index)}>Delete</button>
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

    render() {
        const {postData, removePost, redirect} = this.props

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
                        <TableBody post={postData} delPost={removePost} redirect={redirect} search={this.state.search}/>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListPost
