import { NavLink } from 'react-router-dom';
import styles from './BasketCard.module.css';
// не забывай ипортировать ROUTES:
import { ROUTES } from '../../router/routes';
import DeletIcon  from '../../assets/icons/delete1.svg';

export const BasketCard = ({ image, name, description, id, price }) => {
  return (
    <div className={styles.basketCardWrap}>
      <NavLink to={`${ROUTES.productID}/${id}`}>
        <img src={image} className={styles.image}></img>
      </NavLink>
      <div className={styles.descriptionWrap}><span>{name}</span>
      <span>{description}</span></div>
      <strong>{price}</strong>
     
      <div className={styles.counter}>
        <button className={styles.button}>&#8211;</button>
        <span>1</span>
        <button className={styles.button}>+</button>
        <button className={styles.svgButton}>
          <DeletIcon className={styles.svgDelete}/>
        </button>
      </div>
    </div>
  );
};
