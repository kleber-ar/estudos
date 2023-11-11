import { useContext } from "react";
import ThemeContext from "../context/themeContext";

function Header() {
    const themeContext = useContext(ThemeContext);

    return (
        <header>
            <h1>Trybe</h1>
            <button className="theme" onClick={() => themeContext.toggleTheme()}>
                {themeContext.theme === 'dark' ? '☀️' : '🌒'}
            </button>
        </header>
    )
}

export default Header;