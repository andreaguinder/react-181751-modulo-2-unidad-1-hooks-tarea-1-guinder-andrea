import { useState } from "react";
import { tareas } from "../../data/mock"
import { Tarea } from "../Tarea/Tarea"

const ContenedorTareas = () => {


    return (
        <>
        <h2>Lista de Tareas</h2>

        <ul>

        {tareas.map((tarea) => (

          <li key={tarea.id}>
            <h3>{tarea.title}</h3>
            <p>{tarea.description}</p>
            <span>Estado: {tarea.status ? "Completada" : "Pendiente"}</span>

            <Tarea task={tarea} />
          </li>
        ))}
      </ul>
      </>
    )

}

export { ContenedorTareas };