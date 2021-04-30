import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

export const authContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on("logout", (user) => {
      setUser(null);
    });
    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => netlifyIdentity.open();

  const logout = () => netlifyIdentity.logout();

  return (
    <authContext.Provider value={{ user, login, logout, authReady }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
