import React, { Component } from 'react'
import './SignInPage.css'

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            cnfpassword: "",
            buttonDisabled: false

        }
    }


    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleCnfPasswordChange = (event) => {
        this.setState({
            cnfpassword: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    resetForm() {
        this.setState({
            username: "",
            password: "",
            cnfpassword: "",
            butonDisabled: false
        })
    }

    async doSignup() {


        if (!this.state.username) {
            alert('username and password required');
            return;
        }
        if (!this.state.password) {
            alert('username and password required');
            return;
        }
        if (this.state.password !== this.state.cnfpassword) {
            this.resetForm();
            alert('Password not matched');
            return;
        }

        this.setState({
            butonDisabled: true
        })

        try {
            let res = await fetch('/signup', {
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
                this.props.isSignedup = true
                this.props.username = result.username
            }
            if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            } else { alert(result.msg) }
        } catch (err) {
            console.log(err);
            this.resetForm()
        }
    }


    render() {
        const { email, password, username, cnfpassword } = this.state
        return (
            <div className="loginBody">
                <div className="container formBox">
                    <h3 className="loginText center">Sign Up!</h3>
                    <form className="col s12" onSubmit={() => this.doSignup()} >
                        <div className="input-field col s12 ">
                            <input className="validate" id='name' type="text" value={username} onChange={this.handleNameChange} />
                            <label htmlFor="name">Username: </label>
                        </div>
                        <div className="input-field col s12">
                            <input className="validate" id="password" type="password" value={password} onChange={this.handlePasswordChange} />
                            <label htmlFor="password">Password: </label>
                        </div>
                        <div className="input-field col s12">
                            <input className="validate" id="cnfpassword" type="password" value={cnfpassword} onChange={this.handleCnfPasswordChange} />
                            <label htmlFor="cnfpassword">Confirm Password: </label>
                        </div>
                        <div className="row  center">
                            <button className="waves-effect waves-light btn-small" type="submit" name="action" disabled={this.state.butonDisabled} >Signup </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Signup
