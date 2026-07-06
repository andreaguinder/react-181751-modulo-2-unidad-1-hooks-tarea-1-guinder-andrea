import { useState } from "react";
import "./main.scss";
import { ContenedorGeneral } from "./components/ContenedorGeneral/ContenedorGeneral";
import { Navbar } from "./components/Navbar/Navbar";
import { ContenedorTareas } from "./components/ContenedorTareas/ContenedorTareas";

function App() {


  return (
    <>

<ContenedorGeneral>

<Navbar/>
<ContenedorTareas/>

</ContenedorGeneral>

    </>
  );
}

export default App;
