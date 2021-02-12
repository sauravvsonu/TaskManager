import React, { Component } from 'react'
import Navbar from './Navbar'
import AddTaskManager from './Task/AddTaskManager'
import CreateTask from './Task/CreateTask'
import Task from './Task/Task'
import './Dashboard.css'
import { Link } from 'react-router-dom';

const textStlye ={
    backgroundColor: '#09203f'
}


export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             logout: '',
             add: '',
             AddTaskManager: false,
             addTask: false
        }
        this.handleCloseTaskBar = this.handleCloseTaskBar.bind(this)
    }
    
    handleClickAddTaskBar = () => {
            this.setState({ AddTaskManager: true});
    }

    handleCloseTaskBar = ()=> {
        this.setState({AddTaskManager: false});
    }

    handleAddTask = () => {
            this.setState({ addTask: true});
    }

    handleCloseTask = ()=> {
        this.setState({addTask: false});
    }

    

    handleClickAdd=()=>{
        this.setState({
            logout: 4
        })
    } 
    
    handleClickLogout=()=>{
        this.setState({
            add: 4
        })
        
    }

    render() {
        return (
            <div>
                <Navbar />
                 <div className="dashboard container">
                <div className="row">
                       <Task addTask={this.handleAddTask} />        
                       <Task  addTask={this.handleAddTask} />            
                </div>
                
                    <div className="fixed-action-btn" style={{left: "23px"}}>
                    <Link to='/signin' className="btn-floating btn-large waves-effect waves-light (pulse)" style={textStlye} >
                        <i className="large material-icons">logout</i>
                    </Link>   
                    </div>
                    <div className="fixed-action-btn">
                    <button className="btn-floating btn-large waves-effect waves-light (pulse)" style={textStlye} onClick={this.handleClickAddTaskBar} >
                        <i className="large material-icons">add</i>
                    </button>   
                    {/* {this.state.AddTaskManager ? {
                        return(
                        <Redirect to={'/signup'} />
                        {this.setState({AddTaskManager: false})}
                        )}: null} */}
                    {/* if ({this.state.AddTaskManager}) return <Redirect to={'/signup'} /> */}
                    {console.log(this.state)}
                    </div>
            </div>
            <div className="AddTaskBar">
            {this.state.addTask ? <CreateTask closeTask={this.handleCloseTask}  /> : null}
            {this.state.AddTaskManager ? <AddTaskManager closeTaskManager={this.handleCloseTaskBar} /> : null}
            </div>
            </div>
        )
    }
}

export default Dashboard
