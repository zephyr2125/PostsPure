import React, { useState } from 'react';

export const Context = React.createContext();

export const AppProvider = (props) => {
    const [language, setLanguage] = useState('EN');
    return (
        <Context.Provider
            value={{
                language,
                setLanguage
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
