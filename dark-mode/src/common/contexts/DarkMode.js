import React, { useReducer, createContext } from 'react';

const DarkModeContext = createContext();

function toggleDarkModeClass(darkMode) {
    const htmlRoot = document.querySelector('html');
    if(darkMode) {
        htmlRoot.classList.add('dark-mode');
    } else {
        htmlRoot.classList.remove('dark-mode')
    }
}

function darkModeReducer(state, action) {
    toggleDarkModeClass(action.darkMode)
    return action.darkMode;
}

function DarkModeProvider({ children }) {
    const [state, dispatch] = useReducer(darkModeReducer, false);
    const context = {
        state,
        dispatch
    };

    React.useEffect(_ => {
        toggleDarkModeClass(state);
    });

    return (
        <DarkModeContext.Provider value={context}>
            {children}
        </DarkModeContext.Provider>
    );
}

function useDarkMode() {
    const context = React.useContext(DarkModeContext);
    if(!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context;
}

export { useDarkMode, DarkModeProvider };