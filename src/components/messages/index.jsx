import {Component} from "react";
import React from "react";
import Message from "../message/message";

class Messages extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
        );
    }
}

export default Messages;