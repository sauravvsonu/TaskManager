
import Dashboard from "../Dashboard";
import { Component } from 'react';
import Login from './Login';
import SignupDashboard from "./SignupDashboard";

export class LoginDashboad extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            isLoggedIn: false,
            username: '',
            firstSignup: false
        }
        // this.signup = this.signup.bind(this);
    }


    async componentDidMount() {

        try {
            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            let result = await res.json();

            if (result && result.success) {
                this.setState({
                    loading: false,
                    isLoggedIn: true,
                    username: result.username
                }
                )
            }
            else {
                this.setState({
                    loading: false,
                    isLoggedIn: false
                }
                )
            }
        } catch (err) {
            console.log(err);
            this.setState({
                loading: false,
                isLoggedIn: false
            }
            )
        }
    }

    signup = () => {
        this.setState({
            firstSignup: true
        })
    }

    render() {
        { console.log(this.state.firstSignup) }
        if (this.state.loading) {
            return (
                <div>
                    pls wait Page is Loading!!!
                </div>
            )
        }
        else {
            if (this.state.isLoggedIn) {
                return (
                    <div>
                        <Dashboard
                            isLoggedIn={this.state.isLoggedIn}
                            username={this.state.username}
                        />
                    </div>
                )
            }
            if (this.state.firstSignup) {
                return (
                    <div>
                        <SignupDashboard />
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <Login
                            loading={this.state.loading}
                            isLoggedIn={this.state.isLoggedIn}
                            username={this.state.username}
                            Signup={this.signup}
                        />
                    </div>
                )
            }
        }
    }
}


export default LoginDashboad;
