import { useEffect, useState } from 'react';
import { BasketCard } from './BasketCard';
import styles from './BasketPage.module.css';

export const BasketPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arrayCarts = localStorage.getItem('itemCart');

    if (!arrayCarts) {
      return;
    }
    setItems(JSON.parse(arrayCarts));
  }, []);

  const handlelDeleteClick = id => {
    const arrayProducts = JSON.parse(localStorage.getItem('itemCart'));

    //получаю новый массив исключающий объект по id, не равно в JS !=
    const newArray = arrayProducts.filter(item => item.id != id);
    // console.log(newArray);

    //записываю новый массив товаров в LS после каждого удаления товара
    localStorage.setItem('itemCart', JSON.stringify(newArray));

    setItems(prev => newArray);
  };

  const handlelQuantityClick = (id, action) => {
    //Делаю копию массива
    const newArrayInCart = [...items];

    //Достаю объект из массива
    const product = newArrayInCart.find(item => item.id === id);

    //Обращаюсь в объекте к полю quantity
    product.quantity = action === 'add' ? product.quantity + 1 : product.quantity - 1;
    if (product.quantity <= 0) {
      return handlelDeleteClick(id);
    }
    // Записываю копию массива в LS
    localStorage.setItem('itemCart', JSON.stringify(newArrayInCart));
    setItems(newArrayInCart);
  };

  //Логика подсчета общей стоимости с учетом quantity
  const arrayPrices = items.map(item => item.price * item.quantity).map(parseFloat);
  // console.log(arrayPrices);
  const result = arrayPrices.reduce((sum, current) => sum + current, 0);
  // console.log(result);

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
              quantity={item.quantity}
              handlelDeleteClick={handlelDeleteClick}
              handlelQuantityClick={handlelQuantityClick}
            />
          ))}
        </div>
        <div className={styles.buyWrap}>
          <div className={styles.total}>
            <span>Итого:</span>
            <span>{result} P</span>
          </div>
          <button className={styles.button}>Оформить</button>
        </div>
      </div>
    </>
  );
};

// export const BasketPage = () => {
//   //использую useState чтобы обновлять новое состояние в []
//   //использую один и тотже useState для чтения товаров из LS и функций handlelDeleteClick handlelQuantityClick
//   const [items, setItems] = useState([]);

//   // использую useEffect чтобы не было бесконечных рендеров
//   useEffect(() => {
//     const arrayCarts = localStorage.getItem('itemCart');

//     // Проверка нужна тк если ls пустой то map выдаст ошибку, ему нужен []:
//     if (!arrayCarts) {
//       return; // СТОП функция! и код ниже не выполнится:
//     }
//     setItems(JSON.parse(arrayCarts));
//   }, []);

//   const handlelDeleteClick = id => {
//     const arrayProducts = JSON.parse(localStorage.getItem('itemCart'));
//     //получаю новый массив исключающий объект по id, не равно в JS !=
//     const newArray = arrayProducts.filter(item => item.id != id);
//     // console.log(newArray);

//     //записываю новый массив товаров в LS после каждого удаления товара
//     localStorage.setItem('itemCart', JSON.stringify(newArray));

//     //Для обновления списка товаров в корзине, нужно поменять состояние
//     //иначе товар удалиться  из LS но на странице до момента перезагрузки не отобразятся изменения
//     setItems(prev => newArray);
//   };

//   const handlelQuantityClick = (id, action) => {
//     //Делаю копию массива
//     const newArrayInCart = [...items];
//     // console.log(newArrayInCart);

//     //Достаю объект из массива
//     const product = newArrayInCart.find(item => item.id === id);
//     // console.log(product);

//     //Обращаюсь в объекте к полю quantity
//     product.quantity = action === 'add' ? product.quantity + 1 : product.quantity - 1;
//     if (product.quantity <= 0) {
//       return handlelDeleteClick(id);
//     }
//     // Записываю копию массива в LS
//     localStorage.setItem('itemCart', JSON.stringify(newArrayInCart));
//     setItems(newArrayInCart);
//   };

//   //Логика подсчета общей стоимости с учетом quantity
//   // const arrayProducts = JSON.parse(localStorage.getItem('itemCart'));
//   // // console.log(arrayProducts);
//   const arrayPrices = items.map(item => item.price * item.quantity).map(parseFloat);
//   console.log(arrayPrices);
//   const result = arrayPrices.reduce((sum, current) => sum + current, 0);
//   console.log(result);
