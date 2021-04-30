import { authContext } from "@context/auth.context";
import styles from "@styles/Guides.module.css";
import { useContext, useEffect, useState } from "react";

const getData = async (token) => {
  const response = await fetch(
    "/api/guide",
    token && {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = response.json();
  if (!response.ok) {
    throw Error("You must be logged in.");
  }
  return data;
};

export default function Guides() {
  const { user, authReady } = useContext(authContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (authReady)
      getData(user?.token.access_token ?? null)
        .then((guides) => {
          setError(null);
          setGuides(guides);
        })
        .catch((error) => {
          setError(error.message);
          setGuides(null);
        });
  }, [user, authReady]);
  return (
    <div className={styles.guides}>
      {!authReady && <div>Loading...</div>}

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}

      {guides &&
        guides.map((guide) => (
          <div key={guide.title} className={styles.card}>
            <h3>{guide.title}</h3>
            <h4>written by {guide.author}</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              corrupti iste ab magnam dignissimos id maxime rerum quae minima.
              Delectus maxime culpa est consequatur veritatis, perspiciatis cum
              corrupti possimus quis?
            </p>
          </div>
        ))}
    </div>
  );
}
