"use client"
const { createContext, useState, useEffect } = require("react");


export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== undefined) {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
    return "light";
}

export const ThemeContextProvider = ({ children }) => {

    const [theme, SetTheme] = useState(getFromLocalStorage);
    // const [] = useState("");

    const toggle = () => {
        SetTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme])


    return <ThemeContext.Provider value={{ theme, toggle }}>
        {children}
    </ThemeContext.Provider>
}