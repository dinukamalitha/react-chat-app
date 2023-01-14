import {Component} from "react";
import React from "react";
import Cam from "../../assets/imgs/cam.png";
import Add from "../../assets/imgs/add.png";
import More from "../../assets/imgs/more.png";
import Messages from "../messages";
import InputPanel from "../inputPanel";

class ChatPanel extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="chat-panel">
                <div className="chat-info">
                    <span>Alex</span>
                    <div className="chat-icons">
                        <img src={Cam} alt=""/>
                        <img src={Add} alt=""/>
                        <img src={More} alt=""/>
                    </div>
                </div>
                <Messages/>
                <InputPanel/>
            </div>
        );
    }
}

export default ChatPanel;