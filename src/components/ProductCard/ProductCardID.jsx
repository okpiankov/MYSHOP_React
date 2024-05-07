
/* eslint-disable no-undef */

import { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { useParams } from 'react-router-dom';

export const ProductCardID = () => {

  const [products, setProducts] = useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const respons = await fetch(`https://8a705e193c725f80.mokky.dev/product/${id}`);
      const data = await respons.json();
      setProducts(data);
      console.log(respons);
      console.log(data);
    };
    fetchData();
  }, [id]);

  return (
  
    <div className={styles.productsWrap}>
       
        {products?.map(({ id, image, name, description, price }) => (
          <div key={id} className={styles.cardWrap}>

            <img src={image} className={styles.image}></img>
            <span>{name}</span>
            <span>{description}</span>
            <span>
              <strong>{price}</strong>
            </span>
            <button className={styles.button}>Купить</button>

          </div>
        ))}
      </div> 
  );
};


    // <>
    //   <strong>ProductCardID</strong>
    //   <p>
    //     {data.name} <br /> {data.price}
    //   </p>
    // </>







