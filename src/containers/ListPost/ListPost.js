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
    const rows = props.post.map((p,index) => {
        return (
            <tr key={index}>
                <td>{p.author}</td>
                <td>{p.desc}</td>
                <td>{p.dateTime}</td>
                <td>{p.category}</td>
                <td>
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
    render() {
        const {postData, removePost, redirect} = this.props

        return (
            <div style={styles.listPost}>
                <h1>List Post</h1>    
                {/* Put Table In Below */}
                <div className="table-area">
                    <table>
                        <TableHeader />
                        <TableBody post={postData} delPost={removePost} redirect={redirect}/>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListPost
