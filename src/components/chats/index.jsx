import {Component} from "react";
import React from "react";
import Profile1 from "../../assets/imgs/alex.jpeg";

class Chats extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="chats">
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                        <p>Hello</p>
                    </div>
                </div>
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                        <p>Hello</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chats;