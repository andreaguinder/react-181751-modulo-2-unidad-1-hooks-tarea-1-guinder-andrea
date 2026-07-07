import { useState, useEffect } from "react";
import "./main.scss";
import { ContenedorGeneral } from "./components/ContenedorGeneral/ContenedorGeneral";
import { Navbar } from "./components/Navbar/Navbar";
import { Form } from "./components/Form/Form"
import { ContenedorTareas } from "./components/ContenedorTareas/ContenedorTareas";
import { Footer } from "./components/Footer";

function App() {

  const [listaTareas, setListaTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("misTareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : tareas;
  });

  useEffect(() => {
    localStorage.setItem("misTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);


  const agregarTarea = (dataTareas) => {
    console.log("Tarea recibida", dataTareas)
    setListaTareas([{ id: listaTareas.length + 1, ...dataTareas }, ...listaTareas])
  }

  const handleToggle = (id) => {
    setListaTareas(prev => prev.map(t =>
      t.id === id ? { ...t, status: !t.status } : t
    ));
  };

const handleDelete = (id) => {
    setListaTareas(prev => prev.filter(t => t.id !== id));
};

  const [busqueda, setBusqueda] = useState("")

  const tareasFiltradas = listaTareas.filter(t => 
    t.title.toLowerCase().includes(busqueda.toLowerCase())
);

console.log("Estado búsqueda:", busqueda);
console.log("Tareas filtradas:", tareasFiltradas);
  return (
    <>

      <ContenedorGeneral>

        <Navbar onSearch={(valor) => setBusqueda(valor)} />
        <Form agregarTarea={agregarTarea} />
        <ContenedorTareas listaTareas={tareasFiltradas} handleToggle={handleToggle} handleDelete={handleDelete}/>
    <Footer/>
      </ContenedorGeneral>

    </>
  );
}

export default App;
