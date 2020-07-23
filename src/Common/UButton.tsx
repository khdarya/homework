import React from 'react';
import style from './UButton.module.css';


export type UButtonType = {
    title: string
    onClick?: () => void
}

function UButton(props: UButtonType) {
    return <div>
        <button className={style.green} onClick={props.onClick}>{props.title}</button>
    </div>
}

export default UButton;