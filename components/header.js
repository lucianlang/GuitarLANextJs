import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'
import { popupATC } from '../utils/helpers'

export default function Header() {

    const router = useRouter()

    useEffect(()=> {
        popupATC()
      }, [])

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link legacyBehavior href="/">
                    <Image src='/img/logo.svg' width={300} height={40} alt='imagen logotipo' />
                </Link>
                <nav className={`navegacion ${styles.navegacion}`}>
                    <Link legacyBehavior href="/">
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>
                    </Link>

                    <Link legacyBehavior href="/nosotros">
                        <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                            Nosotros
                        </a>
                    </Link>
                    
                    <Link legacyBehavior href="/tienda">
                        <a className={router.pathname === '/tienda' ? styles.active : ''}>
                            Tienda
                        </a>
                    </Link>

                    <Link legacyBehavior href="/blog">
                        <a className={router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>

                    <Link legacyBehavior href="/carrito">
                        <a>
                            <div className={styles.contenedorCarrito}>
                            <Image width={30} height={25} src="/img/carrito.png" alt="imagen carrito"/>
                            <div className={`${styles.popup} popup`}></div>
                            </div>
                        </a>
                    </Link>


                </nav>
            </div>
        </header>
    )
}
