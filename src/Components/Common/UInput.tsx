import React, {ChangeEvent, KeyboardEvent} from 'react';
import styleInput from './UInput.module.css';


export type UInputPropsType = {
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void
    onBlur?: () => void
    autoFocus?: boolean

}

function UInput(props: UInputPropsType) {


    return <div>
        <input
               className={styleInput.uinput}
               type='text'
               value={props.value}
               onChange={props.onChange}
               onKeyPress={props.onKeyPress}
               onBlur={props.onBlur}
               autoFocus={props.autoFocus}

        />
    </div>
}

export default UInput;