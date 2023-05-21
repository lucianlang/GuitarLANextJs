import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from '../utils/helpers.js'
import styles from '../styles/blog.module.css'
import { useState } from "react"




export default function Post({post}) {
   

 const {contenido, imagen, titulo, url, publishedAt} = post
 const [isLoading, setIsLoading] = useState(false);

 const handleClick = () => {
    setIsLoading(true);
  };

  return (

    <article>
        <Image src={imagen.data[0].attributes.formats.medium.url} width={600} height={400} alt={`imagen blog ${titulo}`}/>
    

    <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>

        <Link legacyBehavior href={`/blog/${url}`}>
            <a className={styles.enlace} onClick={handleClick}>
            {isLoading ? "Cargando..." : "Leer Post"}
            </a>
        </Link>
    </div>
    </article>
  )
}
