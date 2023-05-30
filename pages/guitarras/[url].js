import { useState } from 'react'
import Image from "next/image"
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"
import CartPopUp from '../../components/cartPopUp'
import { toast } from 'react-toastify';

export default function Producto({ guitarra, agregarCarrito }) {

    const [cantidad, setCantidad] = useState(0)
    const { nombre, descripcion, imagen, precio } = guitarra[0].attributes

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);
    };

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            toast.error('Cantidad no válida!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setIsLoading(false);
            return
        }

         // Construir objeto
         const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        
        // Añadiendo al carrito
        setTimeout(() => {
            toast.dismiss(); // Cerrar la notificación anterior antes de mostrar la nueva
            toast.success(
                <div>
                <CartPopUp 
                cantidad={guitarraSeleccionada.cantidad}
                guitarra={guitarra[0].attributes}
                />
                
              </div>, {
                icon: false,
                position: toast.POSITION.TOP_RIGHT,
                className: 'toast-message'
            }
            );
            setIsLoading(false);
        }, "1500")



       
        // Pasando la información
        agregarCarrito(guitarraSeleccionada)
    }


    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.formulario}>
                        <label htmlFor="cantidad">Cantidad:</label>
                        <select
                            onChange={e => setCantidad(+e.target.value)}
                            id="cantidad"
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            className={`${styles.enlace} ${isLoading ? styles.loading : ''}`}
                            onClick={handleClick}
                            type="submit"
                            value={isLoading ? 'Agregando...' : "Agregar al carrito"} />
                    </form>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${encodeURIComponent(url)}&populate=imagen`)
    const { data: guitarra } = await respuesta.json()

    return {
        props: {
            guitarra,
        }
    }
}
