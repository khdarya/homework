import React, {useState} from 'react';
import './App.css';
import Message from "./Message/Message";
import Priorities from './Priorities/Priorities';
import ControlledInput, {NameType} from "./ControlledInputhw3/ControlledInput";
import {v1} from "uuid";


export type TaskType = {
    id: number
    name: string
    priority: string
}

export type FilterValuesType = "alltasks" | "hightasks" | "mediumtasks" | "lowtasks"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, name: "job", priority: "high"},
        {id: 2, name: "movie", priority: "low"},
        {id: 3, name: "games", priority: "low"},
        {id: 4, name: "React", priority: "high"},
        {id: 5, name: "HTML", priority: "medium"}
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
    function removeTask(taskId: number) {
        let filteredTasks = tasks.filter((t) => t.id !== taskId)
        setTasks(filteredTasks)
    }



    let [names, setNames] = useState<Array<NameType>>([]);

    function addName(newUserName: string) {
        let newName = {id: v1(), name: newUserName};
        let newNames = [newName, ...names];
        setNames(newNames);
    }

    return (
        <div>
            {/* <div>
      <Message name="Dima" usertext="Hi, how are you?" time="20:00" />
    </div>*/}
            <div>
                <Priorities title="My Tasks"
                            tasks={tasksForTodoList}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                />
            </div>
            <div>
                <ControlledInput
                    names={names}
                    addName={addName}
                />
            </div>
        </div>
    );
}

export default App;


