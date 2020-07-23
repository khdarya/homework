import React from 'react';
import {FilterValuesType, TaskType} from "../App";
import style from './Priorities.module.css';
import UButton from "../Common/UButton";


type PrioritiesType = {
    title: string
    tasks: Array<TaskType>
    changeFilter: (newFilterValue: FilterValuesType) => void
    removeTask: (taskId: string) => void
}

function Priorities(props: PrioritiesType) {

    const onAllClick = () => {props.changeFilter("alltasks")}
    const onHighClick = () => {props.changeFilter("hightasks")}
    const onMediumClick = () => {props.changeFilter("mediumtasks")}
    const onLowClick = () => {props.changeFilter("lowtasks")}

    return (
        <div>
            <div><h3>{props.title}</h3></div>
            <div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <span className={style.item1}>{t.name}</span>
                                <span className={style.item2}>{t.priority}</span>
                                <button onClick= {() => {props.removeTask(t.id)}}>x</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <UButton title={"all"} onClick={onAllClick} />
                <UButton title={"high"} onClick={onHighClick} />
                <UButton title={"medium"} onClick={onMediumClick} />
                <UButton title={"low"} onClick={onLowClick} />

           {/*     <button onClick= {() => {props.changeFilter("alltasks")}}>All</button>
                <button onClick= {() => {props.changeFilter("hightasks")}}>Hight</button>
                <button onClick= {() => {props.changeFilter("mediumtasks")}}>Medium</button>
                <button onClick = {() => {props.changeFilter("lowtasks")}}>Low</button>*/}

            </div>
        </div>
    )
}

export default Priorities;