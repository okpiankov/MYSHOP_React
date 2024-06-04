import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import { ROUTES } from '../../router/routes';
import {handleAddItem} from '../../services/localStorage';

export const SearchPage = () => {
  const [result, setResult] = useState([]);
  const [search] = useSearchParams();
  const title = search.get('title');

  console.log(search.get('title'));

  useEffect(() => {
    fetch(`https://8a705e193c725f80.mokky.dev/product?name=*${title}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setResult(res);
      });
  }, [title]);
   
  return (
    <>
      <div className={styles.orderWrap}>
        {result.length === 0 ? (
          <p className={styles.notFound}>Ничего не найдено</p>
        ) : (
          // result.map(({ id, image, name, description, price }) => <div key={id}>{name}</div>)
          
          <div className={styles.productsWrap}>
            {result?.map(({ id, image, name, description, price }) => (
              <div key={id} className={styles.cardWrap}>
                <NavLink to={`${ROUTES.productID}/${id}`}>
                  <img src={image} className={styles.image}></img>
                </NavLink>
                <span>{name}</span>
                <span className={styles.center}>{description}</span>
                <span>
                  <strong>{price} P</strong>
                </span>
                <button className={styles.buttonCard} onClick={() => handleAddItem(id, result)}>
                  Добавить в корзину
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

