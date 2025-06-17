import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
