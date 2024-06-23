import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import styles from '../section/Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}> 
              <ul>
                <li><a href="https://www.instagram.com/kelhenrique_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={30}/></a></li>
                <li><a href="https://www.linkedin.com/in/kelvin-henrique-507bb9228/" target='_blank' rel='noopener noreferrer'><FaLinkedin size={30}/></a></li>
                <li><a href="https://github.com/KelBaker?tab=repositories" target='_blank' rel='noopener noreferrer'><FaGithub size={30}/></a></li>
            </ul>
            <p>Kelbaker56@gmail.com.br</p>
            <p>Kelvin Henrique © 2024 </p>
        </div>
    )
}

export default Footer