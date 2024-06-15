import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import styles from './ProductCard.module.css';

export const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://8a705e193c725f80.mokky.dev/product')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);
  
  
  const handleAddItem = id => {
    // Ищу продукт по id  в массиве всех продуктов
    const productID = products.find(item => item.id === id);

    // Получю для проверки из localStorage []  по ключу 'itemCart' данные в формате JSON
    const prevArrayItems = localStorage.getItem('itemCart');

    // Проверяю и записываю ЕДИНОЖДЫ в LS по ключу 'itemCart'  массив с объектом найденным по id
    if (!prevArrayItems) {
      id;
      const item = [{ ...productID, quantity: 1 }];
      localStorage.setItem('itemCart', JSON.stringify(item));
      return;
    }

    const prevArrayCarts = JSON.parse(prevArrayItems);

    // Проверяю есть ли такой же объект в массиве по id
    const ItemInPrevArray = prevArrayCarts.find(item => item.id === id);
    console.log(ItemInPrevArray);

    if (ItemInPrevArray) {
      return;
    }
    // Дозаписываю  в localStorage объект которого нет в ls по id через {...productID}
    const item = [...prevArrayCarts, { ...productID, quantity: 1 }];
    localStorage.setItem('itemCart', JSON.stringify(item));
  }; 

  return (
    <>
      {/*  Чтобы map 1 раз проходился по [] можно указать проверку на пустоту .length > 0 && products */}
      <div className={styles.productsWrap}>
        {products.length > 0 &&
          products?.map(({ id, image, name, description, price }) => (
            <div key={id} className={styles.cardWrap}>
              <NavLink to={`${ROUTES.productID}/${id}`} className={styles.link}>
                <img src={image} className={styles.image}></img>

                <strong>{name}</strong>
                <span className={styles.center}>{description}</span>
                <span>
                  <strong>{price} P</strong>
                </span>
              </NavLink>
              {/* Передаю параметр  id в обработчик события */}
              <button className={isLoading===true ? styles.isLoadingButton : styles.button} onClick={() => handleAddItem(id)}>
                Добавить в корзину
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

// 3й вариант:
// useEffect(() => {
//   const fetchData = async () => {
//     const respons = await fetch("https://8a705e193c725f80.mokky.dev/product");
//     const data = await respons.json();
//     // console.log(data);
//     setProducts(data);
//   };
//   fetchData();
// }, []);

// // 2й вариант:
// const products = [
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
// ];
// return (
//   <>
//     <strong>ProductCard</strong>
//     <div className={styles.productsWrap}>
//       {products.map(({ image, name, description, price }) => (
//         <div key={name} className={styles.cardWrap}>
//           <img src={image} className={styles.image}></img>
//           <span>{name}</span>
//           <span>{description}</span>
//           <span>
//             <strong>{price}</strong>
//           </span>
//           <button className={styles.button}>Купить</button>
//         </div>
//       ))}
//     </div>
//   </>
//   );
// };

// // 1й вариант:
// return (
// <>
//   ProductCard
//   <div className={styles.productsWrap}>
//     <div className={styles.cardWrap}>
//       <img src={Apple} className={styles.image}></img>
//       <span>Смартфон Apple iPhone 15</span>
//       <span>Pro Max 256GB Black Titanium</span>
//       <span>
//         <strong>1300 $</strong>
//       </span>
//       <button className={styles.button}>Купить</button>
//     </div>
//   </div>
// </>
// Сколько объектов(5шт.) в массиве указано столько карточек вернет map!!!
// При возврате разметки через map, map оборачивать в скобки {}
//     const products = [
//       { image: Apple },
//       { name: 'Смартфон Apple iPhone 15' },
//       { description: 'Pro Max 256GB Black Titanium' },
//       { price: '1300 $' },
//     ];
//   );
// };

// Количество рендеров:
// export const ProductCard = () => {
//   // В Компоненте будет 2 рендера:
//   console.log('СТАРТ');

//   const [products, setProducts] = useState([]);

//   console.log('После useState массив products:');
//   console.log(products);

//   console.log('До useEffect');
//   useEffect(() => {
//     console.log('ВНУТРИ useEffect');

//     fetch('https://8a705e193c725f80.mokky.dev/product')
//       .then(response => {
//         console.log('Первый then');
//         return response.json();
//       })
//       // .then(data => console.log(data))
//       .then(data => {
//         console.log('Второй then + setProducts');

//         // setProducts([]);
//         setProducts(data);
//       })
//       .catch(console.error);

//     console.log('В useEffect после fetch');
//   }, []);
//   console.log('После useEffect');

//   console.log('До return');
//   return (
//     <>
//       {console.log('РЕНДЕР ВЕРСТКИ после return')}

//       {/*  Чтобы map 1 раз проходился по [] можно указать проверку на пустоту .length > 0 && products */}
//       <div className={styles.productsWrap}>
//         {products.length > 0 &&
//           products.map(({ id, image, name, description, price }) => (
//             <div key={id} className={styles.cardWrap}>
//               <NavLink to={`${ROUTES.productID}/${id}`} className={styles.link} >

//                 <img src={image} className={styles.image}></img>

//               <strong>{name}</strong>
//               <span className={styles.center}>{description}</span>
//               <span>
//                 <strong>{price}</strong>
//               </span>

//               </NavLink>
//               <button className={styles.button}>Добавить в корзину</button>
//             </div>
//           ))}
//       </div>
//     </>
//   );
// };
