import styles from "../section/CustomText.module.css";

function CustomText() {
    return (
        <div className={styles.container}>
            <div className={styles.marquee}>
                <h1 className={styles.title}>
                    Node.js <span> + </span> Express <span> + </span> React <span> + </span> MongoDB <span> + </span> SQL <span> + </span> Ruby  
                    <span> + </span> Ubuntu <span> + </span> Figma <span> + </span> Power Bi
                </h1>
            </div>
        </div>
    );
}

export default CustomText;
