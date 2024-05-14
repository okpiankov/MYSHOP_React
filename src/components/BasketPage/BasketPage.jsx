import { BasketCard } from './BasketCard';
import styles from './BasketPage.module.css';

export const BasketPage = () => {
  return (
    <>
      <div className={styles.basketWrap}>
        <div className={styles.cardWrap}>
          <strong>Корзина</strong>
          <BasketCard />
        </div>
        <div className={styles.buyWrap}></div>
      </div>
    </>
  );
};
