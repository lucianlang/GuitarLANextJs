import { useEffect } from "react"
import Layout from "../components/layout"
import Guitarra from "../components/guitarra"
import { textoCargando } from "../utils/helpers"
import styles from '../styles/grid.module.css'

export default function Tienda({ guitarras }) {

useEffect(()=>{
 textoCargando()
}, [])

    return (
        <Layout
            title={'Tienda Virtual'}
            description={"Tienda virtual, venta de guitarras, instrumentos, Guitar LA"}
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Collección</h1>

                <div className={styles.grid}>
                    {guitarras?.map(guitarra => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />
                    ))}
                </div>

            </main>
        </Layout>

    )
}

export async function getStaticProps(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const {data: guitarras} = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
}

/* export async function getServerSideProps() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const { data: guitarras } = await respuesta.json()

    return {
        props: {
            guitarras
        }
    }
} */