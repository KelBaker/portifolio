import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from '../elements/Card.module.css';
import ButtonB from '../elements/ButtonB';

function Card({ id, img, title, tech, description, repo, site, reverse }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            className={`${styles.card} ${reverse ? styles.reverse : ''} ${styles[id] || ''}`}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <a href={site} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={`Imagem do projeto ${title}`} />
            </a>

            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text="Acesse o repositório" link={repo} />
            </section>
        </motion.div>
    );
}

export default Card;
