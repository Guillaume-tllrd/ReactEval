import { createContext, useState, useContext } from 'react';

// Création du contexte
const WitcherAuthContext = createContext(null);

export const WitcherAuthProvider = ({ children }) => {
  // Initialisation à null directement. 
  // Au rafraîchissement, React recharge ce fichier et remet null (donc logout).
  const [currentWitcher, setCurrentWitcher] = useState(null);

  const login = (witcher) => {
    setCurrentWitcher(witcher);
  };

  const logout = () => {
    setCurrentWitcher(null);
  };

  return (
    <WitcherAuthContext.Provider value={{ currentWitcher, login, logout }}>
      {children}
    </WitcherAuthContext.Provider>
  );
};

// Hook personnalisé
export const useWitcherAuth = () => {
  const context = useContext(WitcherAuthContext);
  if (!context) {
    throw new Error("useWitcherAuth doit être utilisé dans un WitcherAuthProvider");
  }
  return context;
};