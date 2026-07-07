import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
    // 1. Obtenemos el valor inicial desde localStorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error al leer localStorage", error);
            return initialValue;
        }
    });

    // 2. Guardamos automáticamente cada vez que cambia el estado
    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("Error al guardar en localStorage", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};