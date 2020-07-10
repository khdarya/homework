import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './ControlledInput.module.css'

export type NameType = {
    id: string
    name: string
}
export type ControlledInputType = {
    names: Array<NameType>
    addName: (newUserName: string) => void
}

function ControlledInput(props: ControlledInputType) {

    let [userName, setUserName] = useState("");

    let addName = () => {
        if (userName.length !== 0) {
            alert("Hello " + userName + "!");
            props.addName(userName)
            setUserName(" ");
        }
    }
    function onNewNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.currentTarget.value);
    }
    function onNewNameKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.charCode === 13) {
            addName()
        }
    }

    return (
        <div>
            <div className={style.item5}>
                <input
                    type="text"
                    value={userName}
                    onChange={onNewNameChanged}
                    onKeyPress={onNewNameKeyPressed}
                />
                <button onClick={addName}>+</button>
            </div>
            <div>
                <ul>
                    {props.names.map((t) => {
                        return (
                            <li key={t.id}>
                                <span>{t.name}</span>
                            </li>
                        )
                    })}

                </ul>
                <div>counter: {props.names.length}</div>
            </div>
        </div>
    )
}
export default ControlledInput;