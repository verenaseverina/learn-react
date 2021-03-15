import '../styles/TableStyleList.css'
import {useState, useEffect} from 'react'
// import DateTime from './DateTime'
import {BrowserRouter as Link} from 'react-router-dom'

const ListPostPage = () => {
    const [datas, setDatas] = useState([{
        id: 1,
        author: 'Jeffrey',
        post_description: 'Learn React',
        post_datetime: '13 March 2021 12:30 PM',
        category: 'Learning'
    },
    {
        id: 2,
        author: 'Ghozi',
        post_description: 'Learn Vue',
        post_datetime: '20 March 2021 10:30 AM',
        category: 'Learning and make website'
    },
    {
        id: 3,
        author: 'Garin',
        post_description: 'Learn Angular',
        post_datetime: '18 February 2021 16:30 PM',
        category: 'Learning'
    }
])

    useEffect(() => {
        if(localStorage.getItem("myData") === null){
            let obj = {datas}
            localStorage.setItem('myData', JSON.stringify(obj));
        }
    });

    return (
        <div>
            <h1 id="titleList">List Post</h1>
            <table className='List'>
                <thead className='headTable'>
                    <tr>
                        <th >Id</th>
                        <th>Author</th>
                        <th>Post_Description</th>
                        <th>Post_Datetime</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((d) => 
                    (<tr key={d.id}>
                        <th>{d.id}</th>
                        <th>{d.author}</th>
                        <th>{d.post_description}</th>
                        <th>{d.post_datetime}</th>
                        <th>{d.category}</th>
                        <Link to="/CreatePostPage">
                          <button onClick>Edit</button>
                        </Link>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPostPage


// onClick={() => this.onEdit(index)}