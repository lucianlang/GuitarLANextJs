import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitarras.module.css'
import { useState } from "react"




export default function Guitarra({guitarra}) {  

const {descripcion, imagen, nombre, precio, url} = guitarra



// Cargando ver Producto
const [isLoading, setIsLoading] = useState(false);


const handleClick = () => {
  setIsLoading(true);
};





  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}
    />
    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>${precio}</p>
      <Link legacyBehavior href={`/guitarras/${url}`}>
      <a onClick={handleClick} className={`${styles.enlace} ver-producto`}>
            {isLoading ? "Cargando..." : "Ver Producto"}</a>
      </Link>

      

    </div>
    </div>
  )
}
