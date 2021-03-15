import '../styles/TableStyleList.css'
import {useState} from 'react'
import DateTime from './DateTime'

const ListPostPage = () => {
    const [datas, setDatas] = useState([{
        id: 1,
        author: 'Jeffrey',
        post_description: 'Learn React',
        post_datetime: DateTime(),
        category: 'Learning'
    },
    {
        id: 2,
        author: 'Ghozi',
        post_description: 'Learn Vue',
        post_datetime: DateTime(),
        category: 'Learning and make website'
    },
    {
        id: 3,
        author: 'Garin',
        post_description: 'Learn Angular',
        post_datetime: DateTime(),
        category: 'Learning'
    }
])

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
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPostPage