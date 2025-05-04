import { BeatLoader } from "react-spinners";
import styles from "./Loeder.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <BeatLoader color="#6e060b" />
    </div>
  );
}

export default Loader;
