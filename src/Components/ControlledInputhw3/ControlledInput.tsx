import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './ControlledInput.module.css';
import UButton from "../Common/UButton";
import styleInput from '../Common/UInput.module.css'


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
    const [error, setError] = useState<string | null>(null);

    const addName = () => {
        if (userName.trim() !== "") {

            /*alert(props.addName(userName.trim())); */ //undefined

            alert(`hello ${userName}`)
            props.addName(userName.trim())
            setUserName("");
        } else {
            setError("Field is required")
        }
    }

    /*  let addName = () => {
          props.addName(userName)
          setUserName("");
      }
  */
    function onNewNameChanged(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.currentTarget.value);
    }

    function onNewNameKeyPressed(e: KeyboardEvent<HTMLInputElement>) {

        setError(null);

        if (e.charCode === 13) {
            addName()
        }
    }

    return (
        <div>
            <div className={style.item5}>
                <input
                    className = {error ? styleInput.error : styleInput.uinput}
                  /*  className={styleInput.uinput}*/
                    type='text'
                    value={userName}
                    onChange={onNewNameChanged}
                    onKeyPress={onNewNameKeyPressed}
                />
                {error && <div className="error-message"> {error} </div>}
                <UButton title={'+'} onClick={addName}/>

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

                <div> counter: {props.names.length}</div>
            </div>
        </div>
    )
}

export default ControlledInput;