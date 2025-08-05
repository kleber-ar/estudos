import { useState } from "react";
import Form from "./components/form";
import Aside from "./components/aside";
import Modal from "./components/modal";
import styles from "./App.module.css";

function App() {
  const [modalOn, setModalOn] = useState(false);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setModalOn((state) => !state);
  };

  return (
    <>
      {modalOn && <Modal handleSubmit={handleSubmit} />}
      <main className={modalOn ? styles.blur : styles.container}>
        <Aside />
        <Form handleSubmit={handleSubmit} />
      </main>
    </>
  );
}

export default App;
