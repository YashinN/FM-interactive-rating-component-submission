import styles from "./CardLayout.module.css";

const CardLayout = ({ children, isSubmit }) => {
  return (
    <section className={`${styles.card} ${isSubmit && styles.textCenter}`}>
      {children}
    </section>
  );
};

export default CardLayout;
