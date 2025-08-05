import styles from "./form.module.css";

type FormProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Form({ handleSubmit }: FormProps) {
  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <header>
          <h1 className={styles.title}>Crie sua conta na Trybe</h1>
          <p className={styles.paragraph}>Leva menos de 1 minuto!</p>
        </header>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.labels}>
            Name
          </label>
          <small className={styles.labelDescription}>
            Fique à vontade para usar seu nome social
          </small>
          <input
            className={styles.textbox}
            id="name"
            type="text"
            placeholder="Maria Silva"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.labels}>
            Email
          </label>
          <input
            className={styles.textbox}
            id="email"
            type="email"
            placeholder="maria@betrybe.com"
          />
        </div>
        <button type="submit">Continuar</button>
      </form>
      <p>
        Já possui conta? <a href="https://betrybe.com">Faça Login</a>
      </p>
    </section>
  );
}

export default Form;
