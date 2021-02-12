import React, { Component } from 'react'
import './SignInPage.css'
import { Redirect } from 'react-router-dom';

export class SignInPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
             navigateToSignup: false,
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
    handleSubmitChange= (event) => {
        console.log(this.state);
        event.preventDefault();
        this.setState({navigateToDashboard: true})
    }

    handleSignup= ()=> {
        this.setState({navigateToSignup: true})
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="loginBody">
            <div className="container formBox">
                <h3 className="loginText center">Log in!</h3>
                <form className="col s12" action="/" onSubmit={this.handleSubmitChange}>
                    <div  className="input-field col s12 ">
                        <input className="validate" id='email' type="email" value={email} onChange={this.handleEmailChange} />
                        <label htmlFor="email">Email: </label>
                    </div>
                    <div  className="input-field col s12">
                        <input className="validate" id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                        <label htmlFor="password">Password: </label>
                    </div>
                    <div className="row formButton">
                    <button className="waves-effect waves-light btn-small" type="submit" name="action">Login </button>
                        <button className="waves-effect waves-light btn-small" onClick={this.handleSignup}>Sign Up</button>
                        {this.state.navigateToSignup ? <Redirect to='/signup'/> : null}
                        {this.state.navigateToDashboard ? <Redirect to='/'/> : null}
                    </div>
                </form>
            </div>
            </div>
            
        )
    }
}

export default SignInPage
