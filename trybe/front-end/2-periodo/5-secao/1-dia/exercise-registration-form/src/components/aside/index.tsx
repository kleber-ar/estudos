import styles from "./aside.module.css";

function Aside() {
  return (
    <aside className={styles.container}>
      <div>
        <img src="/trybe.svg" alt="logo trybe" />
        <h1>A porta de entrada para sua carreira em tecnologia</h1>
      </div>
      <div>
        <img src="/rocket.svg" alt="foguete" />
        <h2 className={styles.subtitle}>
          Já são mais de 1700 pessoas estudantes da Trybe trabalhando na área
          tech.
        </h2>
      </div>
      <div>
        <img src="/tag.svg" alt="tag" />
        <h2 className={styles.subtitle}>
          Nosso currículo é desenhado em parceria com pessoas referência em
          tecnologia e as empresas mais buscadas para se trabalhar do mercado.
        </h2>
      </div>
      <div>
        <img src="/trophy.svg" alt="troféu" />
        <h2 className={styles.subtitle}>
          Preparamos você para encarar todos os desafios encontrados nos
          processos seletivos.
        </h2>
      </div>
    </aside>
  );
}

export default Aside;
