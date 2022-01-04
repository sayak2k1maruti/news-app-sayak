import React, { createContext, useState } from 'react'
import { LightTheme, DarkTheme } from "../Assets/Themes"

const ThemeContext = createContext(null)
const ThemeContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
    const toogleMode = (mode) => {
        setDarkMode(mode)
    }
    return (
        <ThemeContext.Provider value={{
            theme: darkMode ? DarkTheme : LightTheme,
            toogle: toogleMode,
            darkMode : darkMode
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
export { ThemeContext }
