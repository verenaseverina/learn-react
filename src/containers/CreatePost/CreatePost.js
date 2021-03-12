import React, { Component } from 'react'
import style from './CreatePost.module.css'
import {withRouter} from 'react-router'

class TestingWorld extends Component {
    initialState = {
        author: '',
        desc: '',
        category: 'science',
        dateTime: ''
    }

    state = this.initialState

    componentDidMount = () => {
        this.getDate()
    }

    getDate = () => {
        let date = new Date().toLocaleString()
        this.setState({
            dateTime: date
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }


    render() {
        const {author,desc,dateTime,category} = this.state
        const {authorProp, descProp, dateTimeProp, categoryProp} = ''

        return (
            <div>
                <h1>Create Any post !</h1>
                <h1>{this.props.location.state ? this.props.location.state.transfer : 'state transfer null'}</h1>
                {/* Form */}
                <div className={style.formContainer}>
                    <form>
                        <label htmlFor="author">Author : </label>
                        <input id="author" name="author" type="text" value={author} onChange={this.handleChange}/>

                        <label htmlFor="desc">Description : </label>
                        <textarea id="desc" name="desc" rows='4' cols='30' value={desc} onChange={this.handleChange}/>

                        <label for="dateTime">Post Date : </label>
                        <input id="dateTime" name="dateTime" type="text" value={dateTime} disabled/>

                        <label for="category">Category : </label>
                        <select id="category" name="category" form="categoryForm" value={category} onChange={this.handleChange}>
                            <option value="Science">Science</option>
                            <option value="Computer">Computer</option>
                            <option value="Space">Space</option>
                            <option value="Philosophy">Philosophy</option>
                        </select>

                        <input type='button' value='submit' onClick={this.submitForm}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(TestingWorld)
