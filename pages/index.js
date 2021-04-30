import { authContext } from "@context/auth.context";
import styles from "@styles/Home.module.css";
import { useContext } from "react";

export default function Home() {
  const user = useContext(authContext);
  return (
    <div className={styles.home}>
      <h2>Welcome to Gaming Vibes</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          deleniti rem aspernatur odit hic autem neque repellat alias? Debitis
          veniam inventore ipsum similique quos animi ipsa asperiores fuga dolor
          id.
        </p>
      </div>
    </div>
  );
}
