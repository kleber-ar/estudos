import { useState } from "react";
import ThemeContext from "./themeContext";

type ThemeProviderProps = {
    children: React.ReactNode;
};

export default function ThemeProvider({ children }:
    ThemeProviderProps) {
        const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

        function toggleTheme() {
            setPageTheme(pageTheme === 'dark' ? "light" : "dark");
        }

        return (
            <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
                <div className={pageTheme}>{children}</div>
            </ThemeContext.Provider>
        )
    }