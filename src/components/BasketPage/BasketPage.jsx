import { useEffect, useState } from 'react';
import { BasketCard } from './BasketCard';
import styles from './BasketPage.module.css';

export const BasketPage = () => {
  // использую useState чтобы обновлять новое состояние в []
  const [items, setItems] = useState([]);

  // использую useEffect чтобы не было бесконечных рендеров
  useEffect(() => {
    const arrayCarts = localStorage.getItem('itemCart');

    // Проверка нужна тк если ls пустой то map выдаст ошибку, ему нужен []:
    if (!arrayCarts) {
      return; // СТОП функция! и код ниже не выполнится:
    }
    setItems(JSON.parse(arrayCarts));
  }, []);

  return (
    <>
      <div className={styles.basketWrap}>
        <div className={styles.cardWrap}>
          <strong>Корзина</strong>
          {/* Не забывай map в скобках { }  
          map возвращает компонент => (<Компонент />) */}
          {items.map(item => (
            <BasketCard key={item.id} name={item.name} description={item.description} image={item.image} id={item.id} />
          ))}
        </div>
        <div className={styles.buyWrap}>
          <div className={styles.total}>
            <span>Итого:</span>
            <span>150 000 Р</span>
          </div>
          <button className={styles.button}>Купить</button>
        </div>
      </div>
    </>
  );
};
