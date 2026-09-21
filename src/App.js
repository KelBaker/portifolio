import { useState } from 'react'
import './App.css'
import conapi from './image/projects/conapi.png'
import meuportifolio from './image/projects/meuportifolio.PNG'
import portifolio from './image/projects/portifolio.png'
import landingpage from './image/projects/landingpage.PNG'

const projects = [
  { title: 'Clima em tempo real', type: 'Frontend · API', description: 'Dashboard leve para consultar previsão do tempo por cidade, com dados do Open-Meteo.', image: conapi, repo: 'https://github.com/KelBaker/Desafio-2-resolucao', site: 'https://desafio-2-resolucao.netlify.app/' },
  { title: 'Portfólio pessoal', type: 'React · CSS', description: 'Experiência pessoal construída para apresentar projetos, repertório e evolução como dev.', image: meuportifolio, repo: 'https://github.com/KelBaker/meuportifolio', site: 'https://meuportifolio.netlify.app/' },
  { title: 'Novo portfólio', type: 'React · Performance', description: 'Uma nova fase visual com foco em clareza, movimento sutil e navegação mais rápida.', image: portifolio, repo: 'https://github.com/KelBaker/portifolio', site: 'https://novoportifolio.netlify.app/' },
  { title: 'Landing page', type: 'HTML · CSS · JS', description: 'Página de conversão direta, responsiva e construída para capturar atenção.', image: landingpage, repo: 'https://github.com/KelBaker/landingpage', site: 'https://landingpage.netlify.app/' },
]

const skills = ['React', 'Node.js', 'JavaScript', 'Express', 'SQL', 'MongoDB', 'Figma', 'Power BI']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Kelvin Henrique, início">
          <span className="brand-mark">KH</span><span>Kelvin Henrique</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#work" onClick={closeMenu}>Projetos</a>
          <a href="#skills" onClick={closeMenu}>Habilidades</a>
          <a href="#about" onClick={closeMenu}>Sobre mim</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Vamos conversar <span>↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Disponível para novos projetos</p>
            <h1>Transformo ideias em <em>experiências digitais.</em></h1>
            <p className="hero-lede">Sou Kelvin, desenvolvedor fullstack apaixonado por criar produtos digitais claros, rápidos e que fazem sentido para as pessoas.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Ver projetos <span>↓</span></a><a className="text-link" href="mailto:Kelbaker56@gmail.com">Fale comigo <span>↗</span></a></div>
          </div>
          <div className="hero-art" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="hero-card"><span>01 / 04</span><strong>building<br />with purpose</strong><small>React · Node · Data</small></div></div>
        </section>

        <section className="ticker" aria-label="Áreas de atuação"><div>DESIGN DIGITAL <b>✦</b> DESENVOLVIMENTO <b>✦</b> DADOS ESTRATÉGICOS <b>✦</b> DESIGN DIGITAL <b>✦</b></div></section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><div><p className="eyebrow">01 — Trabalho selecionado</p><h2>Projetos que <em>ganham vida.</em></h2></div><p className="section-intro">Uma seleção de trabalhos e experimentos que mostram como penso, construo e resolvo problemas.</p></div>
          <div className="project-grid">{projects.map((project, index) => <article className={`project-card project-${index}`} key={project.title}><a href={project.site} target="_blank" rel="noreferrer" className="project-image"><img src={project.image} alt={`Prévia do projeto ${project.title}`} loading="lazy" /></a><div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-links"><a href={project.site} target="_blank" rel="noreferrer">Visitar <span>↗</span></a><a href={project.repo} target="_blank" rel="noreferrer">Código <span>↗</span></a></div></div></article>)}</div>
        </section>

        <section className="skills section-pad" id="skills"><div className="section-heading"><div><p className="eyebrow">02 — Meu repertório</p><h2>Ferramentas para<br /><em>tirar do papel.</em></h2></div><p className="section-intro">Tecnologia é o meio. Curiosidade, organização e atenção aos detalhes são o que guiam cada entrega.</p></div><div className="skill-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><span className="skill-arrow">↗</span></div>)}</div></section>

        <section className="about section-pad" id="about"><p className="eyebrow">03 — Sobre mim</p><div className="about-layout"><h2>Curioso por natureza,<br /><em>construtor por escolha.</em></h2><div><p>Sou desenvolvedor fullstack formado pela DNC e estudante de Estatística na UEPB. Gosto de entender o problema antes de escolher a ferramenta e acredito que bons produtos nascem do encontro entre análise, estética e código.</p><p>Fora da tela, estou sempre estudando algo novo — atualmente explorando dados, novas interfaces e formas melhores de transformar complexidade em simplicidade.</p><a className="text-link" href="https://drive.google.com/uc?export=download&id=1M6EOyipkvJNCdvb2nyVxYnaTJwUe0XDX" target="_blank" rel="noreferrer">Baixar currículo <span>↓</span></a></div></div></section>

        <section className="contact section-pad" id="contact"><p className="eyebrow">04 — Entre em contato</p><div className="contact-layout"><h2>Tem uma ideia?<br /><em>Vamos conversar.</em></h2><a className="contact-email" href="mailto:Kelbaker56@gmail.com">Kelbaker56@gmail.com <span>↗</span></a></div></section>
      </main>
      <footer className="footer"><span>© 2026 Kelvin Henrique</span><span>Feito com intenção, código e café.</span><div><a href="https://github.com/KelBaker" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/kelvin-h-507bb9228/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/kelhenrique_" target="_blank" rel="noreferrer">Instagram</a></div></footer>
    </div>
  )
}

export default App
