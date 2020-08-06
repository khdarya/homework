import React, {ChangeEvent, useState} from 'react';
import UInput from "./UInput";
import UButton from "./UButton";

export type EditableSpanPropsType = {

    title: string
    onChange: (text: string) => void

    onSaveClick: () => void
    onRestoreClick: () => void
}


function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);

function changeInput (e: ChangeEvent<HTMLInputElement>) {
    props.onChange(e.currentTarget.value)
}


  return (
      <div>
          {
              editMode ? <UInput onChange={changeInput}
                                 value={props.title}
                                 onBlur={() => setEditMode(false)}
                                 autoFocus={true}/>
              : <span onDoubleClick={() => setEditMode(true)}>{props.title}</span>
          }
          <div>
              <UButton title={"Save Data"} onClick={props.onSaveClick}/>
              <UButton title={"Restore Data"} onClick={props.onRestoreClick}/>
          </div>
      </div>
  )

}

export default EditableSpan;