import PropTypes from "prop-types";
import "../src/index.css";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-slate-900 shadow-md rounded-lg p-4 m-4 flex justify-between hover:bg-slate-700">
            <div className="">
                <h2 className="text-xl font-bold mb-2" autoFocus>
                    {task.title}
                </h2>
                <p className="text-gray-400">{task.description}</p>
            </div>
            <div>
                <span>
                    <button
                        onClick={() => {
                            deleteTask(task.id);
                        }}
                        className="bg-red-600 text-white p-2 rounded-md mt-2 active:bg-red-700"
                    >
                        Eliminar
                    </button>
                </span>
            </div>
        </div>
    );
}

TaskCard.propTypes = {
    task: PropTypes.object,
    deleteTask: PropTypes.func,
};

export default TaskCard;
