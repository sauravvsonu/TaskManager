
import { Component } from 'react';
import Signup from './Signup';
import LoginDashboad from "./LoginDashboad";

export class SignupDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            isSignedup: false,
            username: ''
        }
    }

    async componentDidMount() {

        try {
            let res = await fetch('/isSignedup', {
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
                    isSignedup: true,
                    username: result.username
                }
                )
            }
            else {
                this.setState({
                    loading: false,
                    isSignedup: false
                }
                )
            }
        } catch (err) {
            console.log(err);
            this.setState({
                loading: false,
                isSignedup: false
            }
            )
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    pls wait Page is Loading!!!
                </div>
            )
        }
        else {
            if (this.state.isSignedup) {
                return (
                    <div>
                        <LoginDashboad />
                    </div>
                )
            } else {
                return (
                    <div>
                        <Signup loading={this.state.loading} isSignedup={this.state.isSignedup} username={this.state.username} />
                    </div>
                )
            }
        }
    }
}


export default SignupDashboard;
