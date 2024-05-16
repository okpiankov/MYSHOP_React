import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../router/routes';

export const HeaderMenu = ({setPopUpAuth}) => {
  //передача пропса {setPopUpAuth} через скобки{}
  const handleVisiblePopUp = () => setPopUpAuth(true);

  return (
    <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>
        <NavLink to={ROUTES.root}>О нас</NavLink>
        <NavLink to={ROUTES.pay}>Оплата</NavLink>
        {/* <Link to={ROUTES.pay}>Оплата</Link> */}
        <div>Доставка</div>
        <div>Поиск</div>

        {/* <NavLink to={ROUTES.auth}>Войти</NavLink> */}

        {/* <NavLink to={ROUTES.authFormik}>Войти</NavLink> */}

        <button type="button" onClick={handleVisiblePopUp}>
          Войти
        </button>

        <NavLink to={ROUTES.basket}>Корзина</NavLink>
        <div>Телефон</div>
      </div>
    </header>
  );
};
