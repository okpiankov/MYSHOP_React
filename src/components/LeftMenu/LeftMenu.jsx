import { NavLink } from 'react-router-dom';
import styles from './LeftMenu.module.css';
import { ROUTES } from '../../router/routes';

export const LeftMenu = () => {
  return (
    <nav className={styles.leftMenuWrap}>
      <div className={styles.link}>Категории</div>
      <div className={styles.popUpMenu}>
        <NavLink to={ROUTES.productsAll} className={`${styles.all} ${styles.link}`}>Все</NavLink>

        <NavLink to={`${ROUTES.productsType}?type=phone`} className={`${styles.phone} ${styles.link}`}>Смартфоны</NavLink>

        <NavLink to={`${ROUTES.productsType}?type=laptop`} className={`${styles.laptop} ${styles.link}`}>Ноутбуки</NavLink>

        <NavLink to={`${ROUTES.productsType}?type=TV`} className={`${styles.tv} ${styles.link}`}>Телевизоры</NavLink>
      </div>

        <NavLink to={`${ROUTES.productsType}?type=phone`} className={`${styles.phone} ${styles.link}`}>Смартфоны</NavLink>

        <NavLink to={`${ROUTES.productsType}?type=laptop`} className={`${styles.laptop} ${styles.link}`}>Ноутбуки</NavLink>

        <NavLink to={`${ROUTES.productsType}?type=TV`} className={`${styles.tv} ${styles.link}`}>Телевизоры</NavLink>
    </nav>
  );
};

//   return (
//     <nav className={styles.leftMenuWrap}>
//       <div>
//         <NavLink to={ROUTES.product}>Группа товаров 1</NavLink>
//       </div>
//       <div>Группа товаров 2</div>
//       <div>Группа товаров 3</div>
//     </nav>
//   );
// };
