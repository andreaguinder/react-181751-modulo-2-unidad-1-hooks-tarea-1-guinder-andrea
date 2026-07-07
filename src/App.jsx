import { useState, useEffect, useMemo } from "react";
import "./main.scss";
import { ContenedorGeneral } from "./components/ContenedorGeneral/ContenedorGeneral";
import { Navbar } from "./components/Navbar/Navbar";
import { Form } from "./components/Form/Form"
import { ContenedorTareas } from "./components/ContenedorTareas/ContenedorTareas";
import { Footer } from "./components/Footer";
import { tareas } from "./data/mock"

function App() {

  const [listaTareas, setListaTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem("misTareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : tareas;
  });

  useEffect(() => {
    localStorage.setItem("misTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);


  const agregarTarea = (dataTareas) => {

    const nuevaTarea = { 
        id: Date.now(), 
        ...dataTareas 
    };
    
    setListaTareas([nuevaTarea, ...listaTareas]);
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



const tareasFiltradas = useMemo(() => {
    console.log("Calculando filtro..."); // Vas a ver que esto solo sale si cambias algo
    return listaTareas.filter(t => 
        t.title.toLowerCase().includes(busqueda.toLowerCase())
    );
}, [listaTareas, busqueda]);

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
