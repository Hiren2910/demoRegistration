import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet'
import axios from "axios";
let url = 'http://localhost:8080/saveContact';

export class SingInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios.post(url, this.state)
            .then(() => {
                this.setState({ redirect: true })
                this.setState = {
                    email: '',
                    password: '',
                    redirect: true
                }
            })
            .catch(err => console.log(err))
        console.log('Login Successfully Done.');
        console.log(this.state);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/successful"
                }}
            />
        }
        return (
            <div className="FormCenter">
                <Helmet>
                    <title>Here's the Title!</title>
                    <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
                </Helmet>
                <div className="FormTitle">
                    <h2>User Login</h2>
                </div>

                <form className="FormFields" onSubmit={this.handleSubmit}>
                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="email">Email Address</label>
                        <input
                            type="email" id="email"
                            className="FormField_Input"
                            placeholder="Enter Your E-mail id"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="FormField_Input"
                            placeholder="Enter Your Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                    </div>

                    <div className="FormField">

                        {/* <NavLink exact to="/"> */}
                        <button className="FormField_Button mr-20">
                            Sign In
                            </button>
                        {/* </NavLink> */}
                        <NavLink exact to="/" className="FormField_Link">Create an account</NavLink>
                    </div>
                </form>
            </div >
        )
    }
}

export default SingInForm
