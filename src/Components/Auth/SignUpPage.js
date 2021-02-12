import React, { Component } from 'react'
import './SignInPage.css'
import {  Redirect } from 'react-router-dom';

export class SignUpPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             email: "",
             password: "",
             navigateToDashboard: false
             
        }
    }
    
    handleEmailChange= (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange= (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleNameChange= (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleSubmitChange= (event) => {
        console.log(this.state);
        event.preventDefault()
        this.setState({navigateToDashboard: true})
    }

    render() {
        const {email, password, username} = this.state
        return (
            <div className="loginBody">
            <div className="container formBox">
                <h3 className="loginText center">Sign Up!</h3>
                <form className="col s12" action="/" onSubmit={this.handleSubmitChange}>
                    <div  className="input-field col s12 ">
                        <input className="validate" id='name' type="text" value={username} onChange={this.handleNameChange} />
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div  className="input-field col s12 ">
                        <input className="validate" id='email' type="email" value={email} onChange={this.handleEmailChange} />
                        <label htmlFor="email">Email: </label>
                    </div>
                    <div  className="input-field col s12">
                        <input className="validate" id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                        <label htmlFor="password">Password: </label>
                    </div>
                    <div className="row  center">
                    <button className="waves-effect waves-light btn-small" type="submit" name="action">Signup </button>
                    </div>
                </form>
            </div>
            {this.state.navigateToDashboard ? <Redirect to='/'/> : null}
            </div>
            
        )
    }
}

export default SignUpPage
