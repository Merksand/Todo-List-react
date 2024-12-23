import { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addTask } = useContext(TaskContext);
    console.log("Estoy en taskForm");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "" || description.trim() === "") {
            console.log("Ingresa algo pedazo de mierda");
            return;
        }

        console.log(title);
        addTask(title, description);

        e.target.reset();

        setTitle("");
        setDescription("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-slate-800 p-6 rounded-lg shadow-md"
        >
            <input
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                type="text"
                placeholder="Escribe una tarea"
                className="w-full p-2 mb-4 rounded-md bg-slate-700 text-white placeholder-gray-400"
            />
            <br></br>
            <textarea
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                placeholder="Escribe una descripción"
                className="w-full p-2 mb-4 rounded-md bg-slate-700 text-white placeholder-gray-400"
            ></textarea>
            <br></br>
            <input
                type="submit"
                value="Guardar tarea"
                className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer"
            />
        </form>
    );
}

TaskForm.propTypes = {
    addTask: PropTypes.func,
};

export default TaskForm;
