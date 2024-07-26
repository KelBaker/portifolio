import React from 'react';
import styles from '../section/Skills.module.css'
import javascript from '../../image/habilidades/Javascript.svg'
import html from '../../image/habilidades/html.svg'
import reactImg from '../../image/habilidades/react.svg'
import css from '../../image/habilidades/css.svg'
import typescript from '../../image/habilidades/typescript.svg'

function Skills() {

    return (
        <div className={styles.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos</p>
            <div className={styles.images}>
                <div>
                    <img src={html} className={styles.html} alt="HTML"/>
                </div>
                <div>
                    <img src={javascript} className={styles.javascript} alt="JavaScript"/>
                </div>
                <div>
                    <img src={css} className={styles.css} alt="CSS"/>
                </div>
                <div>
                    <img src={reactImg} className={styles.react} alt="React"/>
                </div>
                <div>
                    <img src={typescript} className={styles.typescript} alt="TypeScript"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
