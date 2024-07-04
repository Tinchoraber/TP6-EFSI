"use client";  
import styles from "./reservas.module.css";
import Titulo from "../components/Titulo/page.js";
import Subtitulo from "../components/SubTitulo/page.js";
import Form from "../components/Form/page.js";
import Listado from "../components/Listado/page.js";
import { useState } from 'react';

export default function Reservas() {
   const [citas, setCitas] = useState([]);
   return (
    <>
        <Titulo texto="ADMINISTRADOR DE PACIENTES" />
        <div className={`${styles.divGeneral}`}>
        <div className={`${styles.padre}`}>
        <Subtitulo texto="CREAR MI CITA"></Subtitulo>
        <Form setCitas={setCitas} citas={citas}></Form>
        </div>
        <div className={`${styles.padre}`}>
        <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
        <Listado citas={citas} setCitas={setCitas}></Listado>
        </div>
        </div>
    </>
  );
}
