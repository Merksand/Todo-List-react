import PropTypes from "prop-types";
import { useState, createContext } from "react";
import { tasks as InitialTask } from "../data/task.js";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState(InitialTask);

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    function addTask(title, description) {
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                title,
                description: description,
            },
        ]);
    }

    return (
        <TaskContext.Provider value={{ tasks, deleteTask, addTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}

TaskContextProvider.propTypes = {
    children: PropTypes.node,
};