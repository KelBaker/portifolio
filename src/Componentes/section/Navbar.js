import { useState } from "react";
import styles from "./Navbar.module.css";
import menu from "../../image/NavbarFooter images/menu.svg";
import close from "../../image/NavbarFooter images/close.svg";
import logo from "../../image/NavbarFooter images/logo.svg";

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles.navbar}>
                <img
                    src={logo}
                    alt="logo"
                    style={{ width: "100px", height: "80px" }}
                    className={styles.logo}
                />
                <ul className={styles.icons}>
                    <img
                        src={isModalOpen ? close : menu}
                        alt="menu"
                        style={{ width: "50px", height: "60px", cursor: "pointer" }}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    />
                </ul>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={close}
                            alt="Fechar"
                            className={styles.closeIcon}
                            onClick={() => setIsModalOpen(false)}
                        />
                        <ul className={styles.menuList}>
                            <li>
                                <a href="https://www.instagram.com/kelhenrique_" target="_blank" rel="noopener noreferrer">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="mailto:Kelbaker56@gmail.com">
                                    E-mail
                                </a>
                            </li>
                            <li>
                                <h4>
                                    Telefone: +55 (11) 91345-0341 
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
