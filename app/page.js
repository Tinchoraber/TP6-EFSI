import Titulo from './components/Titulo/page.js';
import styles from './page.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <section className={styles.content}>
      <Image
        src={"/funciones-veterinarios.jpg"}
        width={600}
        height={400}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          venenatis consectetur ex, nec iaculis velit.
        </p>
        <p>
          Fusce lobortis commodo purus, at elementum urna venenatis et. Morbi
          faucibus eros vitae lacus eleifend, a maximus justo bibendum.
        </p>
      </section>
    </>
  );
}
