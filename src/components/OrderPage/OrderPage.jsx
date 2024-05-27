import { useEffect, useState } from 'react';
import { OrderCard } from './OrderCard';
import styles from './OrderPage.module.css';

export const OrderPage = () => {
  return (
    <>
      <div className={styles.orderWrap}>
        <strong className={styles.title}>Мои заказы</strong>

        <OrderCard />
        <OrderCard />
      </div>
    </>
  );
};
