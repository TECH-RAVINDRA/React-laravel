import React, { Component } from 'react';
import {login} from './UserFunctions';
import logoicon from '../logo-icon.png';
import './Login.css'
import { Link, withRouter } from 'react-router-dom'
class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit (e) {
        e.preventDefault();
        
        const user ={
            email : this.state.email,
            password : this.state.password
        }

        login(user).then(res =>{
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }

    render() {
        return(
            <div id="loginbox">
                <form id="loginform" className="form-vertical" noValidate onSubmit={this.onSubmit}>
                    <div className="control-group normal_text">
                        <h3><img src={logoicon} alt="Logo" /></h3>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_lg"><i className="fas fa-envelope"> </i></span><input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <div className="controls">
                            <div className="main_input_box">
                                <span className="add-on bg_ly"><i className="fa fa-key"></i></span><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-actions">
                        <Link to="/register"><span className="float-left"><button className="flip-link btn btn-info" id="to-recover">Register</button></span></Link>
                        <span className="float-right"><input type="submit" value="Login" className="btn btn-success" /></span>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login