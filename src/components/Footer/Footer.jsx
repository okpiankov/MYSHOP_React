import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerWrap}`}>
        <div>О проекте</div>
        <div>Покупателям</div>
        <div>Контакты</div>
      </div>
    </footer>
  );
};
