import { useState } from 'react'
import '../styles/TableStyleCreate.css'

const CreatePostPage = () => {

    const [author, setAuthor] = useState("");
    const [post_description, setPost_Description] = useState("");
    // const [category, setCategory] = useState("");

    const[authorErr, setAuthorErr] = useState({});
    const [post_descriptionErr, setPost_DescriptionErr] = useState({});
    // const [categoryErr, setCategoryErr] = useState({});

    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
    }

    const formValidation = () =>{
        const authorErr = {};
        const post_descriptionErr = {};
        // const categoryErr = {};
        let isValid = true;

        if(author.trim().length >= 20){
            authorErr.authorNameShort = "[ 20 Character ]" 
            isValid = false;
        }

        if(post_description.trim().length >= 100){
            post_descriptionErr.post_descriptionShort = "[ 100 Character]"
            isValid = false;
        }

        setAuthorErr(authorErr);
        setPost_DescriptionErr(post_descriptionErr);
        return isValid;
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='formCreate'>
                <h1>Create Post</h1>
                <label>
                    <input type="text" 
                           name = "author"
                           value={author} 
                           placeholder='Author' 
                           onChange={(e)=>{setAuthor(e.target.value)}}/>
                    <br/>
                    {Object.keys(authorErr).map((key) => {
                        return  <div style = {{color : "red"}}>{authorErr[key]}</div>
                    })}
                    <br/>
                    <input type="text" 
                           name = "post_description"
                           value={post_description} 
                           placeholder='Post_Description'
                           onChange={(e)=>{setPost_Description(e.target.value)}}/>
                    <br/>
                    {Object.keys(post_descriptionErr).map((key) => {
                        return  <div style = {{color : "red"}}>{post_descriptionErr [key]}</div>
                    })}
                    <br/>
                    {/* <input type="text" 
                           value={category} 
                           placeholder='Category'
                           onChange={(e)=>{setCategory(e.target.value)}}/>
                    <br/><br/> */}
                </label>
                <br/> <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePostPage
