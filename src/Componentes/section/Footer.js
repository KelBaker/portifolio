import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from '../section/Footer.module.css';
import logo from  '../../image/NavbarFooter images/logo.svg';
import nome from  '../../image/NavbarFooter images/nome.svg';

function Footer() {
    return(
        <div className={styles.footer}> 
            <div className={styles.footerContent}>
                <img src={logo} alt='logo' className={styles.logo}/>

                <div className={styles.links}>
                    <a href="#Presentation" className={styles.link}>Presentation</a>
                    <a href="#Projects" className={styles.link}>Projects</a>
                    <a href="#AbouthMe" className={styles.link}>AboutMe</a>
                    <a href="#ContactMe" className={styles.link}>ContactMe</a>
                </div>
                     <div className={styles.direitos}>
                        <img src = {nome} alt ='nome' className={styles.nome}/>
                        <h4>© 2024 Todos os direitos reservados.<br/>Desenvolvido por Kelvin Henrique | dev</h4>

                     </div>
            </div>
        </div>
    );
}

export default Footer;
