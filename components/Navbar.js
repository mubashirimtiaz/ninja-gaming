import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { authContext } from "@context/auth.context";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(authContext);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        {authReady && (
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a>Guides</a>
              </Link>
            </li>
            {user && <li>{user.email}</li>}
            <li className="btn" onClick={!user ? login : logout}>
              {!user ? "Login/SignUp" : "Logout"}
            </li>
          </ul>
        )}
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={276} />
      </div>
    </div>
  );
}
