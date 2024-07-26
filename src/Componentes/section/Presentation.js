import React, { useEffect, useState } from 'react'
import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import eu from '../../image/eu.svg'

function Presentation() {
    const [text, setText] = useState('')
    const toRotate = ['Kelvin Henrique', 'Desenvolvedor Front-end']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const period = 70
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length 
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop + 1)
        }
    }

    return (
        <div className={styles.presentation} id='Presentation'>
            <div className={styles.text}>
                <h4><strong>Bem vindo ao meu portfólio</strong></h4>
                <h1>Olá, eu sou {text}</h1>
                <p>
                    Olá! Sou Kelvin Henrique, um desenvolvedor Front-End apaixonado por tecnologia e inovação. Estudo na Instituição DNC e estou sempre em busca de novos desafios. Tenho um interesse especial em Inteligência Artificial e adoro combinar programação com design criativo, usando ferramentas como Photoshop e Figma. Estou pronto para colaborar em projetos inovadores que unam tecnologia e criatividade. Se você procura alguém comprometido e entusiasta para fazer parte da sua equipe, estou disponível para conversarmos! Vamos transformar ideias em realidade juntos? Você pode me encontrar no LinkedIn ou GitHub. Para contatos mais rápidos pode enviar um e-mail para kelbaker56@gmail.com
                </p>
                <ButtonA link='https://github.com/KelBaker?tab=repositories' text='Conecte-se comigo!' />
            </div>
            <div className={styles.foto}>
                <img src={eu} alt='Eu' />
            </div>
        </div>
    )
}

export default Presentation
