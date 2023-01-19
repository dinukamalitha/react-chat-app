import {Component} from "react";
import React from "react";
import "./style.scss";
import Add from "../../assets/imgs/addAvatar.png";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth } from "../../firebase/firebase";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData:{
                name: "",
                email: "",
                password: "",
                file: ""
            }
        }
    }

    handleSubmit = (e) =>{
        const name = this.state.formData.name;
        const email = this.state.formData.email;
        const password = this.state.formData.password;
        const file = this.state.formData.file;


        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    render() {
        return (
            <div className="container">
                <div className="containerWrapper">
                    <div className="titleContainer">
                        <span className="heading">Din-Chat</span>
                        <span className="title">Register</span>
                    </div>
                    <form>
                        <input type="text" placeholder="Name:"
                               onChange={(e) => {
                                   let data = this.state.formData;
                                   data.name = e.target.value;
                                   this.setState({data})
                               }}
                        />
                        <input type="email" placeholder="E-mail:"
                               onChange={(e) => {
                                   let data = this.state.formData;
                                   data.email = e.target.value;
                                   this.setState({data})
                               }}
                        />
                        <input type="password" placeholder="Password:"
                               onChange={(e) => {
                                   let data = this.state.formData;
                                   data.password = e.target.value;
                                   this.setState({data})
                               }}
                        />
                        <input type="file" id="file" style={{display:'none'}}
                               onChange={(e) => {
                                   let data = this.state.formData;
                                   data.file = e.target.value;
                                   this.setState({data})
                               }}
                        />
                        <label htmlFor="file">
                            <div className="label" style={{display:'flex'}}>
                                <img src={Add} alt="ADD" width="40px" style={{marginLeft:'5px',cursor:'pointer'}}/>
                                <span style={{display:'flex',marginLeft:'5px',alignItems:'center',cursor:'pointer'}}>Add an image</span>
                            </div>

                        </label>
                    </form>
                    <div className="btnContainer">
                        <button type="submit" onClick={() =>{
                            this.handleSubmit();
                        }}>Register</button>
                    </div>
                    <p>Do you have an Account? Login</p>
                </div>
            </div>
        )
    }
}

export default Register;