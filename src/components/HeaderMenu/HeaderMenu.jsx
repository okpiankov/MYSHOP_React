import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../router/routes';

export const HeaderMenu = () => {
  return (
    <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>
        <div>
          <NavLink to={ROUTES.root}>О нас</NavLink>
        </div>
        <div>
          <NavLink to={ROUTES.pay}>Оплата</NavLink>
          {/* <Link to={ROUTES.pay}>Оплата</Link> */}
        </div>
        <div>Доставка</div>
        <div>Поиск</div>
        <div><NavLink to={ROUTES.auth}>Войти</NavLink></div>
        <div>Корзина</div>
        <div>Телефон</div>
      </div>
    </header>
  );
};
