import React, { Component } from 'react'
import '../Auth/SignInPage.css'

// const buttonStyle ={
//     position: 'relative',
//     right: '24px',
//     bottom: '-20px',
// }

const textStyle = {
    color: 'black',
    fontWeight: '500'
}


export class AddTaskManager extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '', 
        }
    }
    
    handleTitleChange= (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleContentChange= (event) => {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmitChange= (event) => {
        console.log(this.state);
        event.preventDefault();
        this.props.closeTaskManager()
    }

    render() {
        const {title} = this.state;
        return (
            <div className="addTask">
            <div className="container FormBox">
            {/* <h3 className="loginText center">Add Task</h3> */}
            <form className="col s12" action="/" onSubmit={this.handleSubmitChange}>
                <div  className="input-field col s12 ">
                    <input className="validate" id='title' type="text" value={title} onChange={this.handleTitleChange} style={textStyle} />
                    <label htmlFor="title">Title: </label>
                </div>
                <div className="row  center">
                <button className="waves-effect waves-light btn-small" type="submit" name="action">Create </button>
                </div>
            </form>
                {/* <a className="btn-floating waves-effect waves-light " style={buttonStyle} onClick={this.props.closeTaskManager}><i className="material-icons">close</i></a> */}
        </div>
        </div>
        )
    }
}

export default AddTaskManager
