import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductCardID.module.css';

export const ProductCardID = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const respons = await fetch(`https://8a705e193c725f80.mokky.dev/product/${id}`);
      const data = await respons.json();
      setProduct(data);
      // console.log(respons);
      // console.log(data);
    };
    fetchData();
  }, [id]);

  const handleAddItem = () => {
    // При записи в LS обязательно переводим в формат JSON.stringify(что записываем)
    // Чтение/ запись LS: ключ в ковычках ' ' getItem('ключ')

    // Получаем для проверки из localStorage []  по ключу 'cartItems' данные в формате JSON
    const prevArrayItems = localStorage.getItem('itemCart');

    // Проверка есть ли уже в ls запись по ключу 'cartItems'
    if (!prevArrayItems) {
      // Записываем ЕДИНОЖДЫ в localStorage в формате JSON по ключу 'cartItems' массив
      //  в него будут добавляться объекты, 1я запись в [] - только 1 объект
      const item = [{ ...product, quantity: 1 }];
      localStorage.setItem('itemCart', JSON.stringify(item));
      return; // пустой return - СТОП функция! Нужен только при первой записи [] в ls,
      // иначе скрип выполниться ниже и на find будет ошибка тк пока в [] только 1 {}
    }
    console.log(prevArrayItems);

    // Полученный []  из JSON конвектируем в js формат пересохраняем в другую переменную
    const prevArrayCarts = JSON.parse(prevArrayItems);

    // Проверяем есть ли такой же объект в массиве по id
    const ItemInPrevArray = prevArrayCarts.find(item => item.id === product.id);
    console.log(ItemInPrevArray); //либо объект который уже есть в [] либо undefined

    if (ItemInPrevArray) {
      return; // если объект по id есть - пустой return - СТОП функция! и код ниже не выполнится:
    }

    // Раскладываем распарсиный предыдущий массив на объекты в нем ...prevArrayCarts
    // И дозаписываем  в localStorage объект которого нет в ls по id через {...product}
    const item = [...prevArrayCarts, { ...product, quantity: 1 }];
    localStorage.setItem('itemCart', JSON.stringify(item));
  };

  return (
    <div className={styles.productsWrap}>
      <div className={styles.cardWrapID}>
        <img src={product.image} className={styles.image}></img>
        <span>
          <strong>{product.name}</strong>
        </span>
        <span>
          {product.description}
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis sunt ipsum inventore impedit voluptate
            dolorum quidem ratione ea eligendi iste eaque, quibusdam nam laudantium. Libero nisi aliquam magni odit qui?
          </p>
        </span>
        <span>
          <strong>{product.price}</strong>
        </span>
        <button className={styles.button} onClick={handleAddItem}>
          Купить
        </button>
      </div>
    </div>
  );
};

// Ошибки:
// 1. Приходит по id не массив, а объект поэтому методы массива(map) не работают:
//    {product?.map(({ id, image, name, description, price }) => (
//    обращение к значению объекта только через ИмяОбъекта.значение {products.name}

// 2. Сразу нельзя из fetch() получить оъект с полями:
//    <p>{data.name}</p>
//    только через  хук const [products, setProducts] = useState(" ");
//    ВАЖНО в useState(" "); указать либо null но тогда нужно прописывать проверку: {product?.name} через ?
//    либо тот тип данных который ожидается через fetch() т.е. объект  { }
//    в fetch() через setProduct(data)  изменить состояние product


// const handleAddItem = () => {
//   // При записи в LS обязательно переводим в формат JSON.stringify(что записываем)
//   // Чтение/ запись LS: ключ в ковычках ' ' getItem('ключ')

//   // Получаем для проверки из localStorage []  по ключу 'cartItems' данные в формате JSON
//   const prevArrayItems = localStorage.getItem('itemCart');

//   // Проверка есть ли уже в ls запись по ключу 'cartItems'
//   if (!prevArrayItems) {
//     // Записываем ЕДИНОЖДЫ в localStorage в формате JSON по ключу 'cartItems' массив
//     //  в него будут добавляться объекты, 1я запись в [] - только 1 объект
//     const item = [{ ...product, quantity: 1 }];
//     localStorage.setItem('itemCart', JSON.stringify(item));
//     return; // пустой return - СТОП функция! Нужен только при первой записи [] в ls,
//     // иначе скрип выполниться ниже и на find будет ошибка тк пока в [] только 1 {}
//   }
//   console.log(prevArrayItems);

//   // Полученный []  из JSON конвектируем в js формат пересохраняем в другую переменную
//   const prevArrayCarts = JSON.parse(prevArrayItems);

//   // Проверяем есть ли такой же объект в массиве по id
//   const ItemInPrevArray = prevArrayCarts.find(item => item.id === product.id);
//   console.log(ItemInPrevArray); //либо объект который уже есть в [] либо undefined

//   if (ItemInPrevArray) {
//     return; // если объект по id есть - пустой return - СТОП функция! и код ниже не выполнится:
//   }

//   // Раскладываем распарсиный предыдущий массив на объекты в нем ...prevArrayCarts
//   // И дозаписываем  в localStorage объект которого нет в ls по id через {...product}
//   const item = [...prevArrayCarts, { ...product, quantity: 1 }];
//   localStorage.setItem('itemCart', JSON.stringify(item));
// };