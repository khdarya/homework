import React from 'react';
import './Message.css';

type PropsType = {
    name: string
    usertext: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className='app-wrapper'>
            <div className='ava'><img src='https://sun9-47.userapi.com/c637221/v637221676/40f6/NOdUcMP2TRk.jpg'/></div>
            <div className='textfield'>
                <div className='item1'>{props.name}</div>
                <div className='item2'>{props.usertext}</div>
                <div className='item3'>{props.time} </div>
            </div>
        </div>

    )

}
export default Message;