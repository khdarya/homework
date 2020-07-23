import React, {ChangeEvent} from 'react';
import style from './UCheckbox.module.css'

type UCheckboxPropsType = {
    onChange: (e: boolean) => void,
    checked: boolean
}

function UCheckbox(props: UCheckboxPropsType) {
    return <div>
        <label className={style.label}>
            <input type="checkbox" className={style.checkbox}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.currentTarget.checked)}
                   checked={props.checked}/>
            <span className={style.check_box}></span>
            CHECK
        </label>
    </div>
}

export default UCheckbox;