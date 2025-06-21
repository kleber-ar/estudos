import { NavLink, Outlet } from "react-router-dom";
import "./layout.css";

function Layout() {
  return (
    <div className="page">
      <h1>Clonue Twitter</h1>
      <nav className="nav">
        {/* Adicionar aqui os links do menu de navegação */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile/betrybe">Perfil</NavLink>
      </nav>
      <main>
        {/* Está faltando algo aqui 👀 */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
