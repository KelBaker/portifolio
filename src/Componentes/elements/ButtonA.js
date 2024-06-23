import styles from '../elements/ButtonA.module.css'



function ButtonA({text, link}){
    return (
        <div>
            <a href={link} target='_blank' rel='noopener noreferrer'>
            <button className={styles.btn}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA