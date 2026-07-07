import { useState, useEffect } from "react";
import { tareas } from "../../data/mock"
import { Tarea } from "../Tarea/Tarea"
import styles from './ContenedorTareas.module.scss';

const ContenedorTareas = ({ listaTareas, handleToggle, handleDelete }) => {

    return (
        <>

        <ul className={styles.containerListaDeTareas}>

        {listaTareas.map((tarea) => (
                <li key={tarea.id}>

                    <Tarea task={tarea} onToggle={() => handleToggle(tarea.id)} onClick={() => handleDelete(tarea.id)} />
                </li>
            ))}
      </ul>
      </>
    )

}

export { ContenedorTareas };