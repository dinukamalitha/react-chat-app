import {Component} from "react";
import React from "react";
import "./style.scss";

class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="containerWrapper">
                    <div className="titleContainer">
                        <span className="heading">Din-Chat</span>
                        <span className="title">Login</span>
                    </div>
                    <form>
                        <input type="email" placeholder="E-mail:"/>
                        <input type="password" placeholder="Password:"/>
                    </form>
                    <div className="btnContainer">
                        <button>Sign Up</button>
                    </div>
                    <p>Don't you have an Account? Register</p>
                </div>
            </div>
        )
    }
}

export default Login;