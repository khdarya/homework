import React from 'react';
import {FilterValuesType, TaskType} from "../App";
import style from './Priorities.module.css';
import UButton from "../Common/UButton";


type PrioritiesType = {
    title: string
    tasks: Array<TaskType>
    changeFilter: (newFilterValue: FilterValuesType) => void
    removeTask: (taskId: number) => void
}

function Priorities(props: PrioritiesType) {
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
                <button onClick= {() => {props.changeFilter("alltasks")}}>All</button>
                <button onClick= {() => {props.changeFilter("hightasks")}}>Hight</button>
                <button onClick= {() => {props.changeFilter("mediumtasks")}}>Medium</button>
                <button onClick = {() => {props.changeFilter("lowtasks")}}>Low</button>
            </div>
        </div>
    )
}

export default Priorities;