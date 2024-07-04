import './Listado.module.css';
import React from "react"
import Cita from '../Cita/page.js';


export default function Listado({citas, setCitas}) {
    {return citas.map(c => (<Cita id={c.id} mascota={c.mascota} propietario={c.propietario} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} citas={citas} setCitas={setCitas}></Cita>))}
}
