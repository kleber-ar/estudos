import { useState } from "react";
import { createUser } from "../services/userAPI";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await createUser({ name });
      navigate("/search");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
          data-testid="login-name-input"
        />

        <button
          type="submit"
          disabled={name.length < 3 || loading}
          data-testid="login-submit-button"
        >
          {loading ? "Carregando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
