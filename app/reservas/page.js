import styles from "./reservas.module.css";
import Titulo from "../components/Titulo/page.js";
import Subtitulo from "../components/SubTitulo/page.js";

export default function Reservas() {
  return (
    <>
        <Titulo texto="ADMINISTRADOR DE PACIENTES" />
        <div className={`${styles["one-half"]} ${styles.column}`}>
        <Subtitulo texto="CREAR MI CITA"></Subtitulo>
        </div>
        <div className={`${styles["one-half"]} ${styles.column}`}>
        <Subtitulo texto="ADMINISTRA TUS CITAS"></Subtitulo>
        </div>
    </>
  );
}
