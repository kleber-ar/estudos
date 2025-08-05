import styles from "./modal.module.css";

type MoldalProps = {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Modal({ handleSubmit }: MoldalProps) {
  return (
    <div className={styles.container}>
      <h1>A Trybe agradece! 💚</h1>
      <button onClick={handleSubmit}>Fechar</button>
    </div>
  );
}

export default Modal;
