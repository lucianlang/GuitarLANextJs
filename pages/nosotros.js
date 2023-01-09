import Image from 'next/image'
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description={"Sobre nosotros, guitarLA, tienda de música"}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

                    <div>
                        <p>
                            Pellentesque a arcu et dui sodales ultricies. Donec cursus pellentesque magna sed molestie. Mauris ornare quam nec dapibus dignissim. Nunc eget nisl vel felis porta tristique nec sit amet nibh. Aliquam neque massa, ornare eu ullamcorper sit amet, condimentum eget velit. Donec tempor quis est non 
                        </p>
                        <p>
                            Vestibulum luctus bibendum viverra. Morbi sagittis mollis nulla, nec consequat tellus finibus at. Aenean molestie, turpis pulvinar finibus convallis, est sem pellentesque odio, vel elementum turpis ex scelerisque velit. Nulla tristique non sem at euismod. Aliquam neque massa, ornare eu ullamcorper sit amet, condimentum eget velit. Donec tempor quis est non. Ut tempus, lectus ac posuere dapibus, nisl tellus 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>

    )
}
