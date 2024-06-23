import React, { useEffect, useState } from 'react';
import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import eu from '../../image/eu.svg';

function Presentation() {
    const staticText = "Olá, eu sou ";
    const phrases = [
        'Kelvin Henrique!',
        'desenvolvedor Front-End!'
    ];
    const [currentText, setCurrentText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setCurrentText(isDeleting
                ? fullText.substring(0, currentText.length - 1)
                : fullText.substring(0, currentText.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 200);

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, typingSpeed, loopNum, phrases, currentPhraseIndex]);

    return (
        <div className={styles.presentation} id='Presentation'>
            <div className={styles.text}>
                <h4><strong>Bem vindo ao meu portfólio</strong></h4>
                <h1>{staticText}{currentText}</h1>
                <p>
                    Olá! Sou Kelvin Henrique, um desenvolvedor fullstack apaixonado por tecnologia e inovação. Estudo na Instituição DNC e estou sempre em busca de novos desafios. Tenho um interesse especial em Inteligência Artificial e adoro combinar programação com design criativo, usando ferramentas como Photoshop e Figma. Estou pronto para colaborar em projetos inovadores que unam tecnologia e criatividade. Se você procura alguém comprometido e entusiasta para fazer parte da sua equipe, estou disponível para conversarmos! Vamos transformar ideias em realidade juntos? Você pode me encontrar no LinkedIn ou GitHub. Para contatos mais rápidos pode enviar um e-mail para kelbaker56@gmail.com
                </p>
                <ButtonA link='https://github.com/KelBaker?tab=repositories' text='Conecte-se comigo!' />
            </div>
            <div className={styles.foto}>
                <img src={eu} alt='Eu' />
            </div>
        </div>
    );
}

export default Presentation;
