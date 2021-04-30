import AuthContextProvider from "@context/auth.context";
import Navbar from "@components/Navbar";
import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
