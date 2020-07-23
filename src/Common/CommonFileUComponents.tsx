import React from 'react';
import UInput from "./UInput";
import UCheckbox from "./UCheckbox";
import UButton from "./UButton";

type CommonFileUComponentsPropsType = {
    checked: boolean
    onChange: (e: boolean) => void
    title: string
}

function CommonFileUComponents(props: CommonFileUComponentsPropsType) {
    return (
        <div>
            <UInput />
            <UCheckbox checked={props.checked} onChange={props.onChange} />
            <UButton title={props.title}/>
        </div>
    )
}

export default CommonFileUComponents;