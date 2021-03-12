import React, { Component } from 'react'
import style from './CreatePost.module.css'

class TestingWorld extends Component {
    initialState = {
        author: '',
        desc: '',
        dateTime: '',
        category: ''
    }

    state = this.initialState

    handleChange = () => {

    }
    
    submitForm = () => {

    }


    render() {
        return (
            <div>
                <h1>Create Any post !</h1>
                {/* Form */}
                <div className={style.formContainer}>
                    <form>
                        <label htmlFor="author">Author : </label>
                        <input id="author" name="author" type="text" />

                        <label htmlFor="desc">Description : </label>
                        <textarea id="desc" name="desc" />

                        <label for="dateTime">Post Date : </label>
                        <input type="date" id="dateTime" name="dateTime" />

                        <label for="category">Category : </label>
                        <select id="category" name="category" form="categoryForm">
                            <option value="Science">Science</option>
                            <option value="Computer">Computer</option>
                            <option value="Space">Space</option>
                            <option value="Philosophy">Philosophy</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }
}

export default TestingWorld
