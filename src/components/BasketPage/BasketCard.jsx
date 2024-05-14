import styles from './BasketCard.module.css';

export const BasketCard = () => {
  return (
    <>
      <div className={styles.basketCardWrap}>
        <img src="#" className={styles.image}></img>
        <span>name</span>
        <span>description</span>
      </div>
    </>
  );
};
