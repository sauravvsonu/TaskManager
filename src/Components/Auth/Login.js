import React, { Component } from 'react'
import './SignInPage.css'
// import { Redirect } from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            butonDisabled: false
            // navigateToSignup: false,
            // navigateToDashboard: false
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    // handleSubmitChange = (event) => {
    //     console.log(this.state);
    //     event.preventDefault();
    //     // this.setState({ navigateToDashboard: true })
    // }

    resetForm() {
        this.setState({
            username: "",
            password: "",
            butonDisabled: false,
        })
    }

    async doLogin() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }

        this.setState({
            butonDisabled: true
        })

        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            })

            let result = await res.json();

            if (result && result.success) {
                this.props.isLoggedIn = true
                this.props.username = result.username
            }
            if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);

            }
        } catch (err) {
            console.log(err);
            this.resetForm()
        }
    }


    render() {
        const { username, password } = this.state
        return (
            <div className="loginBody">
                <div className="container formBox">
                    <h3 className="loginText center">Log in!</h3>
                    <form className="col s12" >
                        <div className="input-field col s12 ">
                            <input className="validate" id='username' type="text" value={username} onChange={this.handleUserNameChange} />
                            <label htmlFor="username">UserName: </label>
                        </div>
                        <div className="input-field col s12">
                            <input className="validate" id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                            <label htmlFor="password">Password: </label>
                        </div>
                        <div className="row formButton">
                            <button className="waves-effect waves-light btn-small" type="submit" name="action" onClick={() => this.doLogin()} disabled={this.state.butonDisabled} >Login </button>
                            <button className="waves-effect waves-light btn-small" onClick={this.props.Signup} >Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login
