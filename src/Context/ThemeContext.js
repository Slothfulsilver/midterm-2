    import {createContext, useState, useContext } from "react"

    export const ThemeContext = createContext();


    export const ThemeProvider = ({children}) => {
        const [theme, setTheme] = useState('false')

        const toggleTheme = () => {
            setTheme(!theme);
            document.documentElement.classList.toggle('Arturo')
        }

    return <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)