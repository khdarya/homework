import React, {useState} from 'react';
import EditableSpan from "./Common/EditableSpan";
import style from "./PreJunior.module.css";


type StateType = {
    x: string
    // y: number
}

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}


const Junior = () => {

    let [message, setMessage] = useState('click to change');

    function changeMessage (text: string) {
        setMessage(text)
    }


    const state: StateType = restoreState<StateType>("test", { x: message });

    function onSaveClick() {
        saveState<StateType>("test", { x: message })
    }
    function onRestoreClick() {
        setMessage(state.x)
    }


    return (
        <div className={style.junior}>
            <EditableSpan  onChange={changeMessage} title={message}
                           onSaveClick={onSaveClick}
                           onRestoreClick={onRestoreClick}/>
        </div>
    )
}

export default Junior;