import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Card from '../elements/Card'
import conapi from '../../image/projects/conapi.png'


function Projects() {
    return(
        <div className={styles.projects} id='Projects'> 
            <h1>Projetos</h1>
            <Card
            img={conapi}
            title='Consumo API - previsão do tempo'
            tech=' HTML,CSS, JS E CONSUMO DE API'
            description='Desenvolvimento de uma pagina de previsão de tempo consumindo API (OpenMeteo e Viacep)'
            repo='https://github.com/KelBaker/Desafio-2-resolucao'
            site='https://desafio-2-resolucao.netlify.app/' 
            />
            <Card
             img={conapi}
             title='Consumo API - previsão do tempo'
             tech=' HTML,CSS, JS E CONSUMO DE API'
             description='Desenvolvimento de uma pagina de previsão de tempo consumindo API (OpenMeteo e Viacep)'
             repo='https://github.com/KelBaker/Desafio-2-resolucao'
             site='https://desafio-2-resolucao.netlify.app/' 
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/KelBaker?tab=repositories'/>
        </div>
    )
}

export default Projects