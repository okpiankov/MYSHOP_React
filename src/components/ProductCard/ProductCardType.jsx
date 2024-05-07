/* eslint-disable no-undef */

import { useEffect, useState } from 'react';
import styles from './ProductCard.module.css';
import { useSearchParams, Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export const ProductCardType = () => {
  const [products, setProducts] = useState(null);
  const [search] = useSearchParams();

  useEffect(() => {
    const type = search.get('type');
    const fetchData = async () => {
      const respons = await fetch(`https://8a705e193c725f80.mokky.dev/product?type=${type}`);
      const data = await respons.json();
      console.log(data);
      setProducts(data);
    };
    fetchData();
  }, [search]);

  
  return (
    <>
      <strong>ProductCard</strong>
      <div className={styles.productsWrap}>
        {products?.map(({ id, image, name, description, price }) => (
          <div key={id} className={styles.cardWrap}>
<NavLink to={`${ROUTES.productID}/${id}`}>
            <img src={image} className={styles.image}></img>
</NavLink>            
            <span>{name}</span>
            <span>{description}</span>
            <span>
              <strong>{price}</strong>
            </span>
            <button className={styles.button}>Купить</button>
          </div>
        ))}
      </div>
    </>
  );
};

  /* <NavLink to={`${ROUTES.productID}/${id}`}></NavLink> */