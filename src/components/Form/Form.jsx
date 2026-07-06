import { useState } from "react";
import styles from './Form.module.scss';

const Form = (task) => {

  const [title, setTitle] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [estaCompletada, setEstaCompletada] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    task.agregarTarea({ title: title, descripcion: descripcion, estaCompletada: estaCompletada })
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value)
  }

  const handleEstaCompletada = (e) => {
    setEstaCompletada(e.target.value === "true")
  }

  return (
    <section className={styles.containerForm}>
      <h2>Agregar tarea nueva:</h2>
      <form onSubmit={handleSubmit}>

        <label htmlfor="title">Nombre de la tarea:</label>
        <input type="text"
          placeholder="Escribe el nombre de la tarea"
          onChange={(e) => handleTitle(e)}
          value={title} />

        <label htmlfor="title">Nombre de la tarea:</label>
        <textarea
          name="descripcion"
          id=""
          placeholder="Describe la tarea"
          defaultValue={""}
          onChange={(e) => handleDescripcion(e)}
          value={descripcion}
        />

        <div>
          <p>¿Está completada?</p>
          <label>
            <input type="radio"
              name="opcion"
              defaultValue="si"
              defaultChecked=""
              onChange={(e) => handleEstaCompletada(e)}
              checked={estaCompletada === true} />
            Si
          </label>
          <label>
            <input type="radio"
              name="opcion"
              defaultValue="no"
              onChange={(e) => handleEstaCompletada(e)}
              checked={estaCompletada === false} />
            No
          </label>
        </div>

        <button type="button">Agregar tarea</button>
      </form>
    </section>
  )

}

export { Form };

