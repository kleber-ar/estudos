import { useContext } from "react";
import ThemeContext from "../context/themeContext";


function Footer() {
    const themeContext = useContext(ThemeContext);

    return <footer> Tema: {themeContext.theme}</footer>;
}

export default Footer;