import {Component} from "react";
import React from "react";
import Profile2 from "../../assets/imgs/anne.jpg";
import Profile3 from "../../assets/imgs/penny.jpg";

class Message extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="message owner">
                <div className="message-info">
                    <img src={Profile2} alt=""/>
                    <span>Just Now</span>
                </div>
                <div className="message-content">
                    <p>hello</p>
                    <img src={Profile3} alt=""/>
                </div>
            </div>
        );
    }
}

export default Message;