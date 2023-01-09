import {Component} from "react";
import React from "react";
import "./style.scss";
import File from "../../assets/imgs/file.png"

class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="containerWrapper">
                    <div className="titleContainer">
                        <span className="heading">Din-Chat</span>
                        <span className="title">Register</span>
                    </div>
                    <form>
                        <input type="text" placeholder="Name:"/>
                        <input type="email" placeholder="E-mail:"/>
                        <input type="password" placeholder="Password:"/>
                        <input type="file" id="file" style={{display:'none'}}/>
                        <label htmlFor="file">
                            <div className="label" style={{display:'flex'}}>
                                <img src={File} alt="ADD" width="40px" style={{marginLeft:'5px',cursor:'pointer'}}/>
                                <span style={{display:'flex',marginLeft:'5px',alignItems:'center',cursor:'pointer'}}>Add an image</span>
                            </div>

                        </label>
                    </form>
                    <div className="btnContainer">
                        <button>Register</button>
                    </div>
                    <p>Do you have an Account? Login</p>
                </div>
            </div>
        )
    }
}

export default Register;