import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Message from "./Message/Message";
import Priorities from './Priorities/Priorities';
import ControlledInput, {NameType} from "./ControlledInputhw3/ControlledInput";
import {v1} from "uuid";
import UButton from "./Common/UButton";
import UInput from "./Common/UInput";
import UCheckbox from "./Common/UCheckbox";
import CommonFileUComponents from "./Common/CommonFileUComponents";


export type TaskType = {
    id: string
    name: string
    priority: string
}

export type FilterValuesType = "alltasks" | "hightasks" | "mediumtasks" | "lowtasks"


function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), name: "job", priority: "high"},
        {id: v1(), name: "movie", priority: "low"},
        {id: v1(), name: "games", priority: "low"},
        {id: v1(), name: "React", priority: "high"},
        {id: v1(), name: "HTML", priority: "medium"}
    ]);
    let [filter, setFilter] = useState<FilterValuesType>("alltasks");
    let tasksForTodoList = tasks;
    if (filter === "hightasks") {
        tasksForTodoList = tasks.filter(t => t.priority === "high")
    } else if (filter === "mediumtasks") {
        tasksForTodoList = tasks.filter(t => t.priority === "medium")
    } else if (filter === "lowtasks") {
        tasksForTodoList = tasks.filter(t => t.priority === "low")
    }

    function changeFilter(newFilterValue: FilterValuesType) {
        setFilter(newFilterValue)
    }

    function removeTask(taskId: string) {
        let filteredTasks = tasks.filter((t) => t.id !== taskId)
        setTasks(filteredTasks)
    }

   let [names, setNames] = useState<Array<NameType>>([]);

    function addName(newUserName: string) {
        let newName = {id: v1(), name: newUserName};
        let newNames = [newName, ...names];
    /*    if(newName.name !== null && newName.name !== "") {
            alert (`Hello ${newName.name}`)
        }*/
        setNames(newNames);
    }

    let [checked, setChecked] = useState<boolean>(false);

    return (
        <div>
            <Message name="Dima" usertext="Hi, how are you?" time="20:00"/>

            <Priorities title="My Tasks"
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}/>

            <ControlledInput
                names={names}
                addName={addName}/>

            <CommonFileUComponents checked={checked} onChange={setChecked} title={"Button"}/>
        </div>
    );
}

export default App;


