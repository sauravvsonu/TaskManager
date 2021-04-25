import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import './navBar.css'
import React, { Component } from 'react'
import axios from 'axios';

export class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            imagelink: '',
            number: 0
        }
    }

    number = () => {
        var randomNumber = Math.floor(Math.random() * 1000)
        // console.log(randomNumber)
        this.getlink(randomNumber)
        // this.setState({
        //     number: randomNumber
        // }, {
        //     console.log(this.state.number)
        // });
        // console.log(this.state.number)

    }
    getlink = (randonNumber) => {
        axios.get(`https://picsum.photos/id/${randonNumber}/info`)
            .then(response => {
                //   console.log(response);
                this.setState({
                    imagelink: response.data.download_url
                })
            })
            .catch(error => {
                console.log(error);
            })

    }

    componentDidMount() {
        this.number()

    }
    render() {
        const { imagelink } = this.state;
        console.log(this.state.number)
        return (
            <div>
                <nav className="nav-wrapper nav-color">
                    <div className="container">
                        <a to='/' className="brand-logo"> Task Manager</a>
                        <ul className="right">
                            <li><a to='/' className='btn btn-floating blue lighten-1'>
                                <img src={imagelink} alt="DP" />
                            </a></li>
                        </ul>
                        {/* <SignIn/> */}
                        {/* <SignOut/> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
