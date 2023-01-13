import {Component} from "react";
import React from "react";
import Profile1 from "../../assets/imgs/alex.jpeg";

class SearchPanel extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-panel">
                <div className="search-form">
                    <input type="text" placeholder="Search user"/>
                </div>
                <div className="user-chat">
                    <img src={Profile1} alt=""/>
                    <div className="user-chat-info">
                        <span>Alex</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPanel;