import Titulo from "../components/Titulo/page.js";
import styles from "./quienessomos.module.css";

export default function QuienesSomos() {
  return (
    <>
      <Titulo texto="Quienes Somos" />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.profile}>
            <h2>Martin Raber</h2>
            <p>
              Le gusta jugar al futbol, es de Boca Juniors, le gusta programar, 
              su comida favorita es la Milanesa con Papas.
            </p>
          </div>
          <div className={styles.profile}>
            <h2>Ilan Averbuch</h2>
            <p>
              Le gusta jugar al futbol, es de River Plate, le gusta programar, 
              le gusta tomar mate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
