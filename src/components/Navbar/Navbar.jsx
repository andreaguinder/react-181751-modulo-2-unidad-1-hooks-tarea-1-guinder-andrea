import { useState } from "react";
import styles from './Navbar.module.scss';

const Navbar = ({ onSearch }) => {

    const [search, setSearch] = useState("")

    const handleSearch = (e) => {
        const valor = e.target.value;
        setSearch(valor);
        onSearch(valor);
    };

    return (

        <div className={styles.navbar}>
            <h1>Tareas</h1>
            <input type="text" placeholder="Busca tu tarea..."
                onChange={handleSearch}
                value={search} />
        </div>
    )

}

export { Navbar };