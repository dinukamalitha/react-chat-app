import React, { useContext } from "react";
import Cam from "../../assets/imgs/cam.png";
import Add from "../../assets/imgs/add.png";
import More from "../../assets/imgs/more.png";
import Messages from "../messages/index";
import InputPanel from "../inputPanel";
import { ChatContext } from "../../context/chatContext";

const ChatPanel = () => {
    const { data } = useContext(ChatContext);

    return (
        <div className="chat-panel">
            <div className="chat-info">
                <span>{data.user?.displayName}</span>
                <div className="chat-icons">
                    <img src={Cam} alt="" />
                    <img src={Add} alt="" />
                    <img src={More} alt="" />
                </div>
            </div>
            <Messages />
            <InputPanel/>
        </div>
    );
};

export default ChatPanel;