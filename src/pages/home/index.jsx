import {Component} from "react";
import React from "react";
import "./style.scss";
import Sidebar from "../../components/sidebar";
import ChatPanel from "../../components/chatPanel";

class Home extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="home">
                <div className="container">
                    <Sidebar/>
                    <ChatPanel/>
                </div>
            </div>
        );
    }
}

export default Home;