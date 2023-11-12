import styles from "./CardLayout.module.css";

const CardLayout = ({ children }) => {
  return <section className={styles.card}>{children}</section>;
};

export default CardLayout;
