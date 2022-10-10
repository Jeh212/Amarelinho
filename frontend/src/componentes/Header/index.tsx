import logo from "../../assets/logo.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};
export { Header };
