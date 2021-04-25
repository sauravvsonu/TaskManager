import React, { Component } from "react";
import Navbar from "./Navbar";
import AddTaskManager from "./Task/AddTaskManager";
import CreateTask from "./Task/CreateTask";
import Task from "./Task/Task";
import "./Dashboard.css";


const textStlye = {
  backgroundColor: "#09203f",
};

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logout: "",
      add: "",
      AddTaskManager: false,
      addTask: false,
    };
    this.handleCloseTaskBar = this.handleCloseTaskBar.bind(this);
  }

  handleClickAddTaskBar = () => {
    this.setState({ AddTaskManager: true });
  };

  handleCloseTaskBar = () => {
    this.setState({ AddTaskManager: false });
  };

  handleAddTask = () => {
    this.setState({ addTask: true });
  };

  handleCloseTask = () => {
    this.setState({ addTask: false });
  };

  handleClickAdd = () => {
    this.setState({
      logout: 4,
    });
  };

  async logout() {

    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      let result = await res.json();

      if (result && result.success) {
        this.props.isLoggedIn = false;
        this.props.username = "";
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="dashboard container">
          <div className="row">
            <Task addTask={this.handleAddTask} />
            <Task addTask={this.handleAddTask} />
            <Task addTask={this.handleAddTask} />
            <Task addTask={this.handleAddTask} />
            <Task addTask={this.handleAddTask} />
            <Task addTask={this.handleAddTask} />
          </div>

          <div className="fixed-action-btn" style={{ left: "23px" }}>
            <a
              className="btn-floating btn-large waves-effect waves-light (pulse)"
              style={textStlye}
              onClick={this.logout}
            >
              <i className="large material-icons">logout</i>
            </a>
          </div>
          <div className="fixed-action-btn">
            <button
              className="btn-floating btn-large waves-effect waves-light (pulse)"
              style={textStlye}
              onClick={this.handleClickAddTaskBar}
            >
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
          {this.state.addTask ? (
            <CreateTask closeTask={this.handleCloseTask} />
          ) : null}
          {this.state.AddTaskManager ? (
            <AddTaskManager closeTaskManager={this.handleCloseTaskBar} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Dashboard;
