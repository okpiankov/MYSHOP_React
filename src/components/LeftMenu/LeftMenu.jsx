/* eslint-disable no-undef */

import { NavLink } from 'react-router-dom';
import styles from './LeftMenu.module.css';
import { ROUTES } from '../../router/routes';

export const LeftMenu = () => {
  return (
    <nav className={styles.leftMenuWrap}>
      <div className={styles.link}>Группа товаров 1</div>
      <div className={styles.popUpMenu}>

        <NavLink to={ROUTES.productAll}>Все</NavLink>

        <NavLink to={`${ROUTES.product}?type=phone`}>Смартфоны</NavLink>

        <NavLink to={`${ROUTES.product}?type=laptop`}>Ноутбуки</NavLink>
      </div>

      <div>Группа товаров 2</div>
      <div>Группа товаров 3</div>
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
