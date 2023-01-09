import Link from "next/link"
import styles from '../styles/footer.module.css'


export default function Footer() {


  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={`navegacion ${styles.navegacion}`}>

          <Link legacyBehavior href="/">
            Inicio
          </Link>

          <Link legacyBehavior href="/nosotros">
            Nosotros
          </Link>

          <Link legacyBehavior href="/tienda">
            Tienda
          </Link>

          <Link legacyBehavior href="/blog">
            Blog
          </Link>

        </nav>

        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
