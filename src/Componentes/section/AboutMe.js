import { motion } from "framer-motion";
import styles from "../section/AboutMe.module.css";
import purple from "../../image/About images/purple.svg";
import TituloAbout from "../../image/About images/TituloAbout.svg";
import nuvem from "../../image/About images/nuvem.svg";
import ContactMe from "../../image/About images/ContactMe.svg";
import Github from "../../image/About images/Github.svg";
import Linkedin from "../../image/About images/Linkedin.svg";
import Curriculo from "../../image/About images/Curriculo.svg";
import MinhaMarca from "../../image/About images/MinhaMarca.svg";

function AboutMe() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const whatsappMessage = `Olá, meu nome é ${name}, meu telefone para contato ${phone} e meu e-mail ${email} ${message}`;

    const whatsappLink = `https://wa.me/5511913450341?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className={styles.container} id="AboutMe">
      <h1 className={styles.texto}>
      Olá! Meu nome é Kelvin Henrique, tenho 21 anos e sou desenvolvedor Fullstack formado pela DNC. Sou apaixonado por tecnologia e pelo desafio de criar soluções inovadoras para problemas diversos. Atualmente, estou cursando Bacharelado em Estatística na UEPB e tenho experiência com uma ampla gama de tecnologias, incluindo Node.js, React, Express, Ruby, SQL, MongoDB, Figma, Ubuntu e Power BI.

      Estudar é meu maior passatempo e, constantemente, busco expandir meus conhecimentos e habilidades. Além disso, possuo inglês e francês em nível intermediário. Destaco-me por minha proatividade, organização, atenção aos detalhes, habilidade analítica e um forte desejo de crescimento contínuo.

      Estou sempre em busca de novos desafios que me permitam aplicar e aprimorar minhas competências, contribuindo para o sucesso de projetos e soluções tecnológicas.


      </h1>

      <img src={purple} alt="purple" className={styles.purple} />
      <img src={TituloAbout} alt="TituloAbout" className={styles.Titulo} />
      <img src={nuvem} alt="nuvem" className={styles.nuvem} />
      <img src={ContactMe} alt="ContactMe" className={styles.contactMe} id="ContactMe" />

      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" placeholder="Digite seu nome" className={styles.btn1} required />
        </label>

        <label>
          <input type="number" name="phone" placeholder="(55) 99999-9999" className={styles.btn1} required />
        </label>

        <label>
          <input type="email" name="email" placeholder="Seu e-mail" className={styles.btn1} required />
        </label>

        <label>
          <textarea name="message" placeholder="Sua mensagem aqui" className={styles.btn1} rows="4" required />
        </label>

        <button type="submit" className={styles.btn2}>Enviar</button>
      </form>
      <div>
        <motion.img
          src={MinhaMarca}
          alt="MinhaMarca"
          className={styles.MinhaMarca}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,  
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 10,
            bounce: 0.4,
            delay: 0.2
          }}
          viewport={{ amount: 0.5 }}
          once={true}  
        /> </div>

      <motion.div className={styles.Icons} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 0.2 }}>
        <a href="https://github.com/KelBaker" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Github}
            alt="Github"
            className={styles.GitHub}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </a>

        <a href="https://www.linkedin.com/in/kelvin-h-507bb9228/" target="_blank" rel="noopener noreferrer">
          <motion.img
            src={Linkedin}
            alt="Linkedin"
            className={styles.Linkedin}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </a>

        <a href="https://drive.google.com/uc?export=download&id=1M6EOyipkvJNCdvb2nyVxYnaTJwUe0XDX" download="Curriculo_Kelvin_Henrique.pdf">
          <motion.img
            src={Curriculo}
            alt="Curriculo"
            className={styles.Curriculo}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
        </a>
      </motion.div>
    </div>
  );
}

export default AboutMe;
