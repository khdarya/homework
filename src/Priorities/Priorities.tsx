import React from 'react';
import {TaskType} from "./App";

export type PrioritiesType = {
    title: string
    tasks: Array<TaskType>

}

function Priorities(props: PrioritiesType) {
    return (
        <div>
            <div>
                <ul>
                    {props.tasks.map((t) => {
                        return (
                            <li key={t.id}>
                                <span>{t.name}</span> <span>{t.priority}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <button>All</button>
                <button>Hight</button>
                <button>Middle</button>
                <button>Low</button>
            </div>
        </div>
    )
}

export default Priorities;