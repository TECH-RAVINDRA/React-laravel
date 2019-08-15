import React, { Component } from 'react'
import { register } from './UserFunctions'
import logoicon from '../logo-icon.png'
import './Register.css'
import { Link, withRouter } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
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
            name: this.state.firstname + '' + this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
                this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div id="registerbox">

                <form id="registerform" className="form-vertical" noValidate onSubmit={this.onSubmit}>
                    <div className="control-group normal_text">
                        <h3><img src={logoicon} alt="Logo" /></h3>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg"><i className="fa fa-user"> </i></span><input id="firstname" type="text" name="firstname" placeholder="Enter FirstName" value={this.state.firstname} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg"><i className="fa fa-user"> </i></span><input id="lastname" type="text" name="lastname" placeholder="Enter Lastname" value={this.state.lastname} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg"><i className="fas fa-envelope"> </i></span><input id="email" type="text" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_ly"><i className="fa fa-key"></i></span><input id="password" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <Link to="/login"><span className="float-left"><button className="flip-link btn btn-info" id="to-recover">Login</button></span></Link>
                        <span className="float-right"><input type="submit" value="Sign Up" className="btn btn-success" /></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Register