import { memo } from 'react';
import styles from '../section/Projects.module.css';
import Card from '../elements/Card';
import ButtonA from '../elements/ButtonA';

import projects from "../../image/projects/projects.svg";
import projects_varetas from "../../image/projects/projects_varetas.svg";
import conapi from '../../image/projects/conapi.png';
import meuportifolio from '../../image/projects/meuportifolio.PNG';
import portifolio from '../../image/projects/portifolio.png';
import landingpage from '../../image/projects/landingpage.PNG';

const projectList = [
    {
        id: "conapi",
        img: conapi,
        imgClassName: styles.conapiImage,
        title: "Consumo API - previsão do tempo",
        tech: "HTML, CSS, JS E CONSUMO DE API",
        description: "Desenvolvimento de uma página de previsão de tempo consumindo API (OpenMeteo e Viacep)",
        repo: "https://github.com/KelBaker/Desafio-2-resolucao",
        site: "https://desafio-2-resolucao.netlify.app/",
    },
    {
        id: "meuportifolio",
        img: meuportifolio,
        imgClassName: styles.meuPortifolioImage,
        title: "Meu Portfólio",
        tech: "React, CSS Modules, Vite",
        description: "Projeto do meu portfólio pessoal desenvolvido com React e Vite",
        repo: "https://github.com/KelBaker/meuportifolio",
        site: "https://meuportifolio.netlify.app/",
    },
    {
        id: "novoportifolio",
        img: portifolio,
        imgClassName: styles.novoPortifolioImage,
        title: "Novo Portfólio",
        tech: "Next.js, Tailwind, Framer Motion",
        description: "Projeto atualizado do meu portfólio com mais animações e performance",
        repo: "https://github.com/KelBaker/portifolio",
        site: "https://novoportifolio.netlify.app/",
    },
    {
        id: "landingpage",
        img: landingpage,
        imgClassName: styles.landingPageImage,
        title: "Landing Page",
        tech: "HTML, CSS, JS",
        description: "Landing Page simples para capturar leads",
        repo: "https://github.com/KelBaker/landingpage",
        site: "https://landingpage.netlify.app/",
    },
];

const Projects = () => {
    return (
        <div className={styles.projects} id="Projects">
            <img
                src={projects_varetas}
                alt="projects_varetas"
                className={styles.projectsVaretas}
                loading="lazy"
            />
            <img
                src={projects}
                alt="Projects"
                className={styles.projectsName}
                loading="lazy"
            />

            {projectList.map((project, index) => (
                <MemoizedCard 
                    key={project.id} 
                    id={project.id} 
                    {...project} 
                    reverse={index % 2 !== 0} 
                />
            ))}
            
            <ButtonA text="Github" link="https://github.com/KelBaker/portifolio" />
        </div>
    );
};

const MemoizedCard = memo(Card);

export default Projects;
