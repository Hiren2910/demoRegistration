import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Helmet } from 'react-helmet'

import axios from "axios";
let url = 'http://localhost:3001/register/addUser';
class SingUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            hasAgreed: false,
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
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
                    name: '',
                    email: '',
                    password: '',
                    redirect: true
                }
            })
            .catch(err => console.log(err))
        console.log('Registration successfully done...');
        console.log(this.state);

    }

    render() {
        if (this.state.redirect) {
            return <Redirect
                to={{
                    pathname: "/datatable",

                }}
            />
        }
        return (
            <div className="FormCenter">
                <Helmet>
                    <title>Here's the Title12!</title>
                    <meta name="description" content="This122 is what you want to show as the page content in the Google SERP Listing" />
                </Helmet>
                <div className="FormTitle">
                    <h2>Create A New Account</h2>
                </div>

                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="FormField_Input"
                            placeholder="Enter Your Full Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="FormField_Input"
                            placeholder="Enter Your E-mail id"
                            name="email" value={this.state.email}
                            onChange={this.handleChange} />
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
                            onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input
                                className="FormField__Checkbox"
                                type="checkbox" name="hasAgreed"
                                value={this.state.hasAgreed}
                                onChange={this.handleChange}
                            />
                            &nbsp;&nbsp;I agree all statements in
                            <NavLink to="" className="FormField__TermsLink"> &nbsp;terms of service</NavLink>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField_Button mr-30">
                            Sign Up
                            </button>
                        <NavLink to="/sign-in" className="FormField_Link">I am already member</NavLink>
                    </div>
                </form>

            </div>
        );
    }
}

export default SingUpForm
