import styles from './Cita.module.css'
import React from "react"

export default function Cita({mascota, propietario, fecha, hora, sintomas, citas, setCitas, id}) {
        const eliminarCita = () => {            
            let eliminar = window.confirm("Estas seguro de eliminar la cita?");
            if (eliminar) {
                setCitas(citas.filter(c => c.id !== id))
            }
        };
        return (
                <div className={styles.citaPadre}>
                <div className={styles.cita}>
                    <p>Mascota: <span>{mascota}</span></p>
                    <p>Dueño: <span>{propietario}</span></p>
                    <p>Fecha: <span>{fecha}</span></p>
                    <p>Hora: <span>{hora}</span></p>
                    <p>Sintomas: <span>{sintomas}</span></p>
                    <button className={styles.button} onClick={eliminarCita}>Eliminar ×</button>
                </div>
                </div>
        )
}

    