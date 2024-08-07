import styles from "./Navbar.module.css"
import {FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";


function Navbar() {
    return(
        <div className={styles.navbar} >
            <ul>
                <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#Skills">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
            </ul>
            <ul className={styles.icons}> 
                <li><a href="https://www.instagram.com/kelhenrique_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.linkedin.com/in/kelvin-henrique-507bb9228/" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a></li>
                <li><a href="https://github.com/KelBaker?tab=repositories" target='_blank' rel='noopener noreferrer'><FaGithub/></a></li>
            </ul>
        </div>
    )
}

export default Navbar