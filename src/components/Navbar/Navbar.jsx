import styles from './Navbar.module.scss';

const Navbar = () => {


    return (

        <div className={styles.navbar}>
            <h1>Tareas</h1>
            <input type="text" placeholder="Busca tu tarea..." />
        </div>
    )

}

export { Navbar };