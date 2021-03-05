import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Body.css';


const initialState = {
        username: "",
        password: "",
        rememberMe: true,
        usernameErr: "",
        passwordErr: ""
}

export default class BodyLogin extends Component {
    state = initialState;

    handleChange = event => {
        const isCheckBox = event.target.type === 'checkbox'
        this.setState({ 
            [event.target.name]: isCheckBox 
            ? event.target.checked 
            : event.target.value
        })
    }

    validate = () => {
        let usernameErr= "";
        let passwordErr= "";

        if(!this.state.username) {
            usernameErr = "ID cannot be blank";
        }

        if(!this.state.password || this.state.password.length < 6) {
            passwordErr = "Password cannot be blank and must be more than 6 digits"
        }

        if(usernameErr || passwordErr) {
            this.setState({ usernameErr, passwordErr})
            return false
        }

        return true;

    }

    // handleCheck = event => {
    //     this.setState({ rememberMe: event.target.checked})
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate()
        if (isValid) {
            console.log(this.state)
            this.setState(initialState)
        }
    }
    render() {
        return (
            // <form onSubmit={this.handleSubmit} >
            //     <input
            //     name="username" 
            //     placeholder="LoginID"
            //     value={this.state.username} 
            //     onChange={this.handleChange}
            //     /> 
            //     <div style={{fontSize: 12, color: "red"}}>
            //         {this.state.usernameErr}
            //     </div>
            //     <br/>

            //     <input 
            //     name="password"
            //     placeholder="password"
            //     type="password"
            //     value={this.state.password} 
            //     onChange={this.handleChange}
            //     />
            //     <div style={{fontSize: 12, color: "red"}}>
            //         {this.state.passwordErr}
            //     </div>
            //     <br/>

            //     <small>Remember me</small>
            //     <input 
            //     name="rememberMe"
            //     type="checkbox" 
            //     checked={this.state.rememberMe}
            //     onChange={this.handleChange}
            //     />

                
            //     <button type="submit">
            //         Login
            //     </button>

            // </form>

            <form onSubmit={this.handleSubmit}>
                <table align="center" width="20%" text-align='center'>
                    <tr>
                        <td>
                            <input
                                name="username" 
                                placeholder="LoginID"
                                value={this.state.username} 
                                onChange={this.handleChange}
                            /> 
                            <div style={{fontSize: 12, color: "red"}}>
                                {this.state.usernameErr}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                name="password"
                                placeholder="password"
                                type="password"
                                value={this.state.password} 
                                onChange={this.handleChange}
                            />
                            <div style={{fontSize: 12, color: "red"}}>
                                {this.state.passwordErr}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <small>Remember me</small>
                           <input 
                                name="rememberMe"
                                type="checkbox" 
                                checked={this.state.rememberMe}
                                onChange={this.handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className='myButton'>
                                Login
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        )
    }
}