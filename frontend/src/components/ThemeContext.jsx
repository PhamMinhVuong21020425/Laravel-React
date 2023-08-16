import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const value = { theme, changeTheme };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export { ThemeProvider };

export default ThemeContext;
