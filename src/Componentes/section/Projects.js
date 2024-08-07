import ButtonB from '../elements/ButtonB'
import styles from '../section/Projects.module.css'
import Card from '../elements/Card'
import conapi from '../../image/projects/conapi.png'
import meuportifolio from '../../image/projects/meuportifolio.PNG'
import portifolio from '../../image/projects/portifolio.png'
import landingpage from '../../image/projects/landingpage.PNG'
import countdown from '../../image/projects/countdown.PNG'



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
             img={meuportifolio}
             title='Portifolio Respansivo'
             tech='  javaScript, CSS, HTML e REACT'
             description='Desenvolvimento do meu portifolio como programador Front-End, incluindo respansividade para dispositivos móveis'
             repo='https://github.com/KelBaker/Meu-portifolio'
             site='https://desafio-2-resolucao.netlify.app/' 
            />
            <Card
             img={portifolio}
             title='Portifolio com função Dark-Mode'
             tech=' javaScript, CSS, HTML e REACT'
             description='Desenvoolvimento de um portifólio utilizando Hooks UseState e UseEffect para a elaboração da troca (pela preferência do visitante) ao modo escuro ou modo claro.'
             repo='https://github.com/KelBaker/desafio3-portifolio'
             site='https://desafio3-portifolio.vercel.app/' 
            />
            <Card
             img={landingpage}
             title='Landing Page - DNC'
             tech=' HTML,CSS, JS'
             description='Desenvolvimento de uma Landing page para a escola de tecnologia DNC'
             repo='https://github.com/KelBaker/Projeto-Landing-Page?tab=readme-ov-file'
             site='https://kelvinhenriquelandingpagednc.netlify.app/' 
            />
             <Card
             img={countdown}
             title='Countdown - CCXP'
             tech=' HTML,CSS, JS'
             description='Desenvolvimento de uma divulgação do grande evento CCXP com um countdown elaborado com JavaScript'
             repo='https://github.com/KelBaker/Countdown'
             site='https://kelbaker.github.io/Countdown/' 
             />
            <ButtonB text='Acesse meu repositório' link='https://github.com/KelBaker?tab=repositories'/>
        </div>
    )
}

export default Projects