import { NavLink } from 'react-router-dom';
import styles from './BasketCard.module.css';
// не забывай ипортировать ROUTES:
import { ROUTES } from '../../router/routes';

export const BasketCard = ({ image, name, description, id }) => {
  return (
    <div className={styles.basketCardWrap}>
      <NavLink to={`${ROUTES.productID}/${id}`}>
        <img src={image} className={styles.image}></img>
      </NavLink>
      <span>{name}</span>
      <span>{description}</span>
      <div className={styles.counter}>
        <button className={styles.button}>-</button>
        <span>1</span>
        <button className={styles.button}>+</button>
      </div>
    </div>
  );
};
