import React from "react";
import { login } from '../UserFunctions';
import loginImg from "../../login.svg";

export class Login extends React.Component {
    constructor() {
        super()
        this.state = {
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

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            // if (res) {
            //     this.props.history.push(`/profile`)
            // }
        })
    }

    render() {
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <form noValidate onSubmit={this.onSubmit}>
                    <div className="header">Login</div>
                    <div className="content">
                        <div className="image">
                            <img src={loginImg} />
                        </div>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        {/* <button type="button" className="btn">
                            Login
                        </button> */}
                        <input type="submit" value="Login" className="btn btn-success" />
                    </div>
                </form>
            </div>
        );
    }
}