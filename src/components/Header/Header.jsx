import styles from "./Header.module.css"

export default function Header({ children }) {
  return (
    <>
      <div className={styles.headerContainer}>
        <p className={styles.header}>Проектная разработка</p>
      </div>
      <div className={styles.bodys}>
        {children}
      </div>
    </>
  );
}