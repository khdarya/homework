import React, {ChangeEvent, KeyboardEvent} from 'react';
import styleInput from './UInput.module.css';



export type UInputPropsType = {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void

}

function UInput(props:UInputPropsType) {


    return <div>
        <input className={styleInput.uinput}
               type='text'
               value={props.value}
               onChange={props.onChange}
               onKeyPress={props.onKeyPress}
        />
    </div>
}

export default UInput;