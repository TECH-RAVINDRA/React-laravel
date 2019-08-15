import React from "react";
import { register } from '../UserFunctions';
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            // this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="header">Register</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        {/* <button type="button" className="btn">
                            Register
                            </button> */}
                        <input type="submit" value="Register" className="btn btn-success" />
                    </div>
                </form>
            </div>

        );
    }
}