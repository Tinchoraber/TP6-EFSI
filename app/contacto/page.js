"use client";
import Titulo from '../components/Titulo/page';
import styles from './contacto.module.css'
import React from 'react';
export default function Contacto() {

    return (
    <>
    <Titulo texto="Contactanos"></Titulo>
    <div className={styles.papaform}>
    <form className={styles.formulario}>
          <div className={styles.divChico}>
          <label className={styles.label}>Nombre</label>
          </div>
          <input type="text" name="nombre" className={styles.input} placeholder="Nombre" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>Apellido</label>
          </div>
          <input type="text" name="apellido" className={styles.input} placeholder="Apellido" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>Email</label>
          </div>
          <input type="email" name="email" className={styles.input} placeholder="Email" defaultValue=""/>
          <div className={styles.divChico}>
          <label className={styles.label}>Deje su comentario</label>
          </div>
          <textarea name="Comentario" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Enviar</button>
      </form>
      </div>
    </>
    );
  }