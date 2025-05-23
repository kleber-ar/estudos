import { useState } from "react";

export type Service = {
  service: string;
  login: string;
  password: string;
  url: string;
};

type Props = {
  onCancel: () => void;
  onSubmit: (service: Service) => void;
};

function Form({ onSubmit, onCancel }: Props) {
  const [service, setService] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasMaxLength = password.length <= 16;
  const hasLettersAndNumbers = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  const isValid =
    service.trim() !== "" &&
    login.trim() !== "" &&
    hasMinLength &&
    hasMaxLength &&
    hasLettersAndNumbers &&
    hasSpecialChar;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ service, login, password, url });
    setService("");
    setLogin("");
    setPassword("");
    setUrl("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do serviço
        <input
          name="service"
          type="text"
          required
          onChange={(e) => setService(e.target.value)}
        />
      </label>
      <label>
        Login
        <input
          name="login"
          type="text"
          required
          onChange={(e) => setLogin(e.target.value)}
        />
      </label>
      <label>
        Senha
        <input
          name="senha"
          type={showPassword ? "text" : "password"}
          minLength={8}
          pattern="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,16}$"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="show-hide-form-password"
        onClick={() => setShowPassword((value) => !value)}
      >
        {showPassword ? "Esconder" : "Mostrar"}
      </button>

      <p
        className={
          hasMinLength ? "valid-password-check" : "invalid-password-check"
        }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={
          hasMaxLength ? "valid-password-check" : "invalid-password-check"
        }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={
          hasLettersAndNumbers
            ? "valid-password-check"
            : "invalid-password-check"
        }
      >
        Possuir letras e números
      </p>
      <p
        className={
          hasSpecialChar ? "valid-password-check" : "invalid-password-check"
        }
      >
        Possuir algum caractere especial
      </p>
      <label>
        URL
        <input type="text" required onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button type="submit" disabled={!isValid}>
        Cadastrar
      </button>
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
}

export default Form;
