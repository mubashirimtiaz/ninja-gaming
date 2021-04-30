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

  useEffect(() => netlifyIdentity.init(), []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
