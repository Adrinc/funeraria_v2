import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const scrollToSection = () => {
    // Aquí puedes implementar la lógica para hacer scroll a la sección deseada
  };

  const contextValue = {
    scrollToSection,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
