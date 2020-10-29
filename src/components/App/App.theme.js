import React from 'react'
import Store from 'store'
import {ThemeContext} from "contexts"

const AppTheme = ({ children }) => {
    const store = Store.useStore()

    const lightMode = {
        main: "#FBFBFB",
        alternative: "#F1F3F6",
        font: "#363B46"
    }

    const darkMode = {
        main: "#282B33",
        alternative: "#2F333C",
        font: "#FFFFFF"
    }

    const modePicker = () => store.get("mode") === "light" ? lightMode : darkMode

    const theme = {
        mode: modePicker(),
        color: {
            first: "#E42C64",
            second: "#614AD3"
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default AppTheme
