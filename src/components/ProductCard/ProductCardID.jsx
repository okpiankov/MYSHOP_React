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
        <button className={styles.button}>Купить</button>
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
