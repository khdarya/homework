import React, {ChangeEvent, useState} from 'react';
import styleInput from './UInput.module.css';

/*export type UInputType = {
    type: string
    value: string
    onChange: (text: string) => void
    onKeyPress: (text: string) => void
}*/

function UInput() {
    return <div>
        <input className={styleInput.uinput}
        />
    </div>
}

export default UInput;