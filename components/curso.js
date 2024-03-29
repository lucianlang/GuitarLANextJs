import styles from '../styles/curso.module.css'

export default function Curso({ curso }) {

    const { contenido, imagen, titulo } = curso



    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
            .curso {
                background: linear-gradient(to right, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.7)), url(${imagen?.data?.attributes?.url});
                background-size: cover;
                background-position: center center;
            }
        `}</style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
    )
}
