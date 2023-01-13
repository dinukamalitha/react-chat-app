import {Component} from "react";
import React from "react";
import Navbar from "../navbar";
import SearchPanel from "../searchPanel";
import Chats from "../chats";

class Sidebar extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="side-bar">
                <Navbar/>
                <SearchPanel/>
                <Chats/>
            </div>
        );
    }
}

export default Sidebar;