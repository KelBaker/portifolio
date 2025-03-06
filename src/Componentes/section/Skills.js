import React from 'react';
import styles from '../section/Skills.module.css'
import skills from '../../image/Eu images/skills.svg'
import kelvin from '../../image/Eu images/kelvin.svg'


function Skills() {

    return (
        <div className={styles.skill} id='Skills'>
           <img src={skills} alt= "habilidades" className={styles.ImgSkills} style ={{width: "60%", height: "30rem"}} />
           <img src={kelvin} alt= "kelvin" className={styles.Imgkelvin} style ={{width: "120vw", height: "60vw"}} />
       
        </div>
    );
}

export default Skills;
