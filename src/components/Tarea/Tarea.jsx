import { useState } from "react";

const Tarea = (task) => {

    const db = JSON.parse(localStorage.getItem("completada"))
    const [tareaCompletada, setTareaCompletada] = useState(db)
    const { id, title, descripcion } = task

    const addTareaCompletada = () => {
        setTareaCompletada(tareaCompletada)
        localStorage.setItem("completada", JSON.stringify(tareaCompletada));
    }



    return (
        <div>
            <p>{task.id} | {task.title}</p>
            <p>{task.descripcion}</p>
            <p>{task.completada}</p>
            <button onClick={addTareaCompletada}>Tarea Completada{tareaCompletada}</button>
        </div>
    )

}

export { Tarea };
