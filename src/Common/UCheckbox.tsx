import React from 'react';
import style from './UCheckbox.module.css'

function UCheckbox() {
    return <div>
        <label className={style.label}>
            <input type="checkbox" className={style.checkbox}/>
            <span className={style.check_box}></span>
            CHECK
        </label>
    </div>
}

export default UCheckbox;