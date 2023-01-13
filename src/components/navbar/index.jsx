import {Component} from "react";
import React from "react";
import Profile1 from "../../assets/imgs/alex.jpeg"

class Navbar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="navbar">
                <span className="logo">Din-Chat</span>
                <div className="user">
                    <img src={Profile1} alt=""/>
                    <span>Alex</span>
                    <button>Logout</button>
                </div>
            </div>
        );
    }
}

export default Navbar;