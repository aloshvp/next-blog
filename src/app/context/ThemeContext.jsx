"use client"
const { createContext, useState } = require("react");


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

    return <ThemeContext.Provider value={{theme}}>
        {children}
    </ThemeContext.Provider>
}