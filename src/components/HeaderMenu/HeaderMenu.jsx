import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../router/routes';
import { Search } from '../Search/Search';
import CartIcon from '../../assets/icons/cart2.svg';
import UserIcon from '../../assets/icons/user1.svg';
import TelIcon from '../../assets/icons/tel.svg';

export const HeaderMenu = ({ setPopUpAuth }) => {
  //передача пропса {setPopUpAuth} через скобки{}
  const handleVisiblePopUp = () => setPopUpAuth(true);

  return (
    <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>
        <NavLink to={ROUTES.root} className={styles.link}>
          О нас
        </NavLink>
        <NavLink to={ROUTES.pay} className={styles.link}>
          Оплата
        </NavLink>
        {/* <Link to={ROUTES.pay} >Оплата</Link> */}
        <NavLink to={ROUTES.delivery} className={styles.link}>
          Доставка
        </NavLink>
        <div>
          <Search />
        </div>

        <NavLink to={ROUTES.cabinet} className={styles.link}>
          Кабинет
        </NavLink>
        <NavLink to={ROUTES.admin} className={styles.link}>
          Админ
        </NavLink>

        {/* <NavLink to={ROUTES.auth}>Войти</NavLink> */}

        {/* <NavLink to={ROUTES.authFormik}>Войти</NavLink> */}

        <LoginButton />

        <button type="button" onClick={handleVisiblePopUp} className={styles.button}>
          <UserIcon className={styles.svgButton} />
        </button>

        <NavLink to={ROUTES.basket}>
          <CartIcon className={styles.svgCart} />
        </NavLink>
        <div>
          <TelIcon className={styles.svgTel} />
          +7-777-77-77-77
        </div>
      </div>
    </header>
  );
};

const LoginButton = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  if (user?.token) {
    return <button>Выйти</button>;
  }
  if (!user?.token) {
    return <button>Войти</button>;
  }
};
