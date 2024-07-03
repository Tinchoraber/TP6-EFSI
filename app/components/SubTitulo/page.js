import React from 'react';
import styles from "./SubTitulo.module.css"
function Subtitulo({ texto }) {
  return <h2 className={styles.subtitulo}>{texto}</h2>;
}

export default Subtitulo;