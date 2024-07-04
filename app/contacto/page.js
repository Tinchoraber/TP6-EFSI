"use client";
import styles from './contacto.module.css'
import React from 'react';
export default function Contacto() {

    return (
    <>
    <div className={styles.papaform}>
    <form className={styles.formulario}>
          <div className={styles.divChico}>
          <label className={styles.label}>Nombre</label>
          </div>
          <input type="text" name="nombre" className={styles.input} placeholder="Nombre Mascota" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>apellido</label>
          </div>
          <input type="text" name="apellido" className={styles.input} placeholder="Nombre Dueño" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>Email</label>
          </div>
          <input type="date" name="fecha" className={styles.input} placeholder="Fecha" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>Deje su comentario</label>
          </div>
          <textarea name="sintomas" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Enviar</button>
      </form>
      </div>
    </>
    );
  }