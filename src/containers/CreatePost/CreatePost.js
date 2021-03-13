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
        var d = new Date();
        var n = d.toString();
        var c = d.toLocaleString();
        let [un, use5] = c.split(",");
        let [time,numbTime,textTime] = use5.split(" ");
        let [hour,min,sec] = numbTime.split(":");
        let [word,use2,use1,use3,use4] = n.split(" ");
        let dateTemplate = use1+' '+use2+' '+use3+' '+hour+':'+min+' '+textTime;
  
        this.setState({
            dateTime: dateTemplate
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

    editForm = () => {
        this.props.handleEdit(this.props.location.state.index, this.state)
        this.setState(this.initialState)
    }


    render() {
        const {author,desc,dateTime,category} = this.state
        let authorProp = '', descProp = '', dateTimeProp = '', categoryProp = ''

        if(this.props.location.state){
            const s = this.props.location.state
            authorProp = s.author
            descProp = s.desc
            dateTimeProp = s.dateTime
            categoryProp = s.category
        }

        return (
            <div>
                <h1>Create Any post !</h1>
                {/* Form */}
                <div className={style.formContainer}>
                    <form>
                        <label htmlFor="author">Author : </label>
                        <input id="author" name="author" type="text" value={authorProp === '' ? author : authorProp} 
                        onChange={this.handleChange}/>

                        <label htmlFor="desc">Description : </label>
                        <textarea id="desc" name="desc" rows='4' cols='30' value={descProp === '' ? desc : descProp} 
                        onChange={this.handleChange}/>

                        <label for="dateTime">Post Date : </label>
                        <input id="dateTime" name="dateTime" type="text" value={dateTimeProp === '' ? dateTime : dateTimeProp} disabled/>

                        <label for="category">Category : </label>
                        <select id="category" name="category" form="categoryForm" 
                        value={categoryProp === '' ? category : categoryProp } onChange={this.handleChange}>
                            <option value="Science">Science</option>
                            <option value="Geography">Geography</option>
                            <option value="Space">Space</option>
                            <option value="Philosophy">Philosophy</option>
                        </select>

                        {this.props.location.state ? 
                        <input type="button" value="Edit" onClick={this.editForm}/> : 
                        <input type='button' value='submit' onClick={this.submitForm}/> }
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(TestingWorld)
