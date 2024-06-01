import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../../store/basket/slice';
import { BasketCard } from './BasketCard';
import styles from './BasketPage.module.css';

export const BasketPage = () => {
  // Чтение данных карточек товаров из Redux:
  // использую useState чтобы обновлять новое состояние в []
  const [items, setItems] = useState([]);

  const cartProducts = useSelector(getCart);
  console.log(cartProducts);

  // использую useEffect чтобы не было бесконечных рендеров
  useEffect(() => {
    if (!cartProducts) {
      return;
    }
    setItems(cartProducts);
  }, [cartProducts]);

  return (
    <>
      <div className={styles.basketWrap}>
        <div className={styles.cardWrap}>
          <strong className={styles.title}>Корзина</strong>
          {/* Не забывай map в скобках { }  
          map возвращает компонент => (<Компонент />) */}
          {items.map(item => (
            <BasketCard
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              id={item.id}
              price={item.price}
            />
          ))}
        </div>
        <div className={styles.buyWrap}>
          <div className={styles.total}>
            <span>Итого:</span>
            <span>150 000 Р</span>
          </div>
          <button className={styles.button}>Оформить</button>
        </div>
      </div>
    </>
  );
};
