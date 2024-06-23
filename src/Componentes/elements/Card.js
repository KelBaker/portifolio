import styles from '../elements/Card.module.css'
import conapi from '../../image/projects/conapi.png'
import ButtomB from '../elements/ButtonB'

function Card ({img,title,tech,description,repo,site}){
    return (
        <div className={styles.card}>
            <a href={site}>
            <img src ={img} alt='erro'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtomB text='Acesse o repositorio' link={repo}/>
            </section>
        </div>
    )
}

export default Card