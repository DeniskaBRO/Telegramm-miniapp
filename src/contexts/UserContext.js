// src/contexts/UserContext.js
import { createContext, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user = window.Telegram.WebApp.initDataUnsafe?.user || {
    id: 123456789,
    first_name: "Иван",
    last_name: "Петров",
    username: "ivanpetrov",
    language_code: "ru",
    is_premium: false,
    photo_url: null,
  };
  
  const InfoUser = {
    user: user, 
    level: 1,
    exp: 0,
  }

  return (
    <UserContext.Provider value={InfoUser}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);