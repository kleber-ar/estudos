import { useEffect, useState } from "react";
import { getUser } from "../services/userAPI";
import { Link } from "react-router-dom";
import { UserType } from "../types";

export default function Profile() {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const result = await getUser();
        setUser(result);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <h2>Perfil</h2>
      <img
        data-testid="profile-image"
        src={user?.image}
        alt={`Imagem de perfil de ${user?.name}`}
      />
      <p>
        <strong>Nome:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p>
        <strong>Descrição:</strong> {user?.description}
      </p>

      <Link to="/profile/edit">Editar perfil</Link>
    </div>
  );
}
