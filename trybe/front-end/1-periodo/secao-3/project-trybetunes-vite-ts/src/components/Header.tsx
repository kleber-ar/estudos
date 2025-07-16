import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getUser } from "../services/userAPI";

function Header() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();
        setUser(response);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <header data-testid="header-component">
      <nav>
        <ul>
          <li>
            <NavLink to="/search" data-testid="link-to-search">
              Pesquisar
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" data-testid="link-to-favorites">
              Favoritos
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" data-testid="link-to-profile">
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
      <div data-testid="header-user-name">
        {loading ? "Carregando..." : user?.name}
      </div>
    </header>
  );
}

export default Header;
