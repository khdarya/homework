import React from 'react';
import style from './Message.module.css';

type PropsType = {
    name: string
    usertext: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={style.appWrapper}>
            <div className={style.ava}>
                <img src='https://sun9-47.userapi.com/c637221/v637221676/40f6/NOdUcMP2TRk.jpg'/>
            </div>
            <div className={style.textfield}>
                <div className={style.item1}>{props.name}</div>
                <div className={style.item2}>{props.usertext}</div>
                <div className={style.item3}>{props.time} </div>
            </div>
        </div>

    )

}
export default Message;