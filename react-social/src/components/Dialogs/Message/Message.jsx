import React from "react";


const  Message = (props) => {

    let newMessageObj = props.messages.map( (message, i) => <p key={i}>{message.message}</p>,);

    return (
        <div>
            {newMessageObj}
        </div>
    )
};

export default Message;
