import {Component} from "react";
import React from "react";
import Img from "../../assets/imgs/img.png";
import Attach from "../../assets/imgs/attach.png";

class InputPanel extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="input-panel">
                <input type="text" placeholder="Type Something"/>
                <div className="send">
                    <img src={Attach} alt=""/>
                    <input type="file" style={{display:"none"}} id="file"/>
                    <label htmlFor="file">
                        <img src={Img} alt=""/>
                    </label>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}

export default InputPanel;