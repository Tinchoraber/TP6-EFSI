"use client";
import styles from './Form.module.css';
import React from "react"

export default function Form({ setCitas, citas }) {
    const agregarCita = (e) => {
        e.preventDefault();
        
        let agregar = window.confirm("Estas seguro de agregar la cita?");
        if (agregar) {
            let mascota = e.target.mascota.value
            let propietario = e.target.propietario.value
            let fecha = e.target.fecha.value
            let hora = e.target.hora.value;
            let sintomas = e.target.sintomas.value;
            let id = Date.now();
            let contieneSoloLetras = validarDatos(mascota);
            let contieneSoloLetras2 = validarDatos(propietario);
            let contieneSoloLetras3 = validarDatos(sintomas);

            if (contieneSoloLetras && contieneSoloLetras2 && contieneSoloLetras3) {
                setCitas([
                    ...citas,
                    {
                        mascota,
                        propietario,
                        fecha,
                        hora,
                        sintomas,
                        id
                    }
                ])        
            } else {
                alert("Datos invalidos, cambiar")
            }
        }
    }

    function validarDatos(nombre) {
        const regex = /^[a-zA-Z\s]*$/;
        return regex.test(nombre);
    }

    return (
        <form onSubmit={agregarCita} className={styles.formulario}>
            <label className={styles.label}>Nombre Mascota</label>
            <input type="text" name="mascota" className={styles.input} placeholder="Nombre Mascota" defaultValue=""/>
            <label className={styles.label}>Nombre Dueño</label>
            <input type="text" name="propietario" className={styles.input} placeholder="Nombre Mascota" defaultValue=""/>
            <label className={styles.label}>Fecha</label>
            <input type="date" name="fecha" className={styles.input} placeholder="Nombre Mascota" defaultValue=""/>
            <label className={styles.label}>Hora</label>
            <input type="time" name="hora" className={styles.input} placeholder="Nombre Mascota" defaultValue=""/>
            <label className={styles.label}>Sintomas</label>
            <textarea name="sintomas" className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>AGREGAR CITA</button>
        </form>
    )
}



