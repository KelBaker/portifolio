import styles from '../elements/Card.module.css'
import conapi from '../../image/projects/conapi.png'
import ButtomB from '../elements/ButtonB'
import {useState} from 'react'

function Card ({img,title,tech,description,repo,site}){


    const [info, setInfo] = useState (false)

    function infoOn () {
        setInfo(true)
    }    

    function infoOff () {
        setInfo(false)
    }    

    return (
        <div onMouseLeave={infoOff} className={styles.card}>
            <a onMouseEnter={infoOn} href={site}>
            <img src ={img} alt='erro'/>
            </a>
        
            {info === true &&(
                 <section>
                 <h3>{title}</h3>
                 <p><strong>Tecnologia:</strong>{tech}</p>
                 <p>{description}</p>
                 <ButtomB text='Acesse o repositorio' link={repo}/>
             </section>
            )}

           
        </div>
    )
}

export default Card