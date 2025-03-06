import React from 'react';
import styles from './Presentation.module.css';
import apresentacao from '../../image/Presentation images/apresentacao.svg';

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <div className={styles.text}>
                <img src={apresentacao} alt="apresentacao" className={styles.image} />
            </div>
        </div>
    );
}

export default Presentation;
