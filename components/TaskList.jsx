import PropTypes from "prop-types";
import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import "../src/index.css";

function TaskList() {
    const { tasks, deleteTask } = useContext(TaskContext);
    if (tasks.length === 0) {
        return (
            <h2 className="w-full bg-red-500 p-4 text-center font-bold text-xl mt-4">
                No hay tareas
            </h2>
        );
    }
    return (
        <>
            {tasks.map((task) => {
                return (
                    <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                    />
                );
            })}
        </>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    deleteTask: PropTypes.func,
};

export default TaskList;
