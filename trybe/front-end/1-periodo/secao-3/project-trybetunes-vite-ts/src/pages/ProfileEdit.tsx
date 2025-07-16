import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../services/userAPI";
import { UserType } from "../types";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType>({
    name: "",
    email: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const result = await getUser();
        setUser(result);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = Object.values(user).every((field) => field.trim() !== "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(user);
      navigate("/profile");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Perfil</h2>

      <label>
        Nome:
        <input
          data-testid="edit-input-name"
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          data-testid="edit-input-email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Descrição:
        <textarea
          data-testid="edit-input-description"
          name="description"
          value={user.description}
          onChange={handleChange}
        />
      </label>

      <label>
        URL da imagem:
        <input
          data-testid="edit-input-image"
          type="text"
          name="image"
          value={user.image}
          onChange={handleChange}
        />
      </label>

      <button
        data-testid="edit-button-save"
        type="submit"
        disabled={!isFormValid}
      >
        Salvar
      </button>
    </form>
  );
}
