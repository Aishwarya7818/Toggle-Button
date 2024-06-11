// context/ColorModeContext.jsx
import React, { createContext, useContext, useState } from 'react';
import { changeColorMode as changeMode } from '../utils/colorMode';

const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const changeColorMode = (to) => {
    setIsDarkMode(to);
    changeMode(to);
  };

  return (
    <ColorModeContext.Provider value={{ isDarkMode, changeColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
