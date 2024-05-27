import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../../router/routes';
import UserIcon from '../../../assets/icons/user1.svg';

export const HeaderMenuAdmin = ({ setPopUpAuth }) => {
  //передача пропса {setPopUpAuth} через скобки{}
  const handleVisiblePopUp = () => setPopUpAuth(true);

  return (
    <header className={styles.headerMenu}>
      <div className={`${styles.container} ${styles.headerMenuWrap}`}>
        <NavLink to={ROUTES.root} className={styles.link}>
          Главная
        </NavLink>

        <NavLink to={ROUTES.cabinet} className={styles.link}>
          Кабинет
        </NavLink>
        <NavLink to={ROUTES.admin} className={styles.link}>
          Админ
        </NavLink>

        <button type="button" onClick={handleVisiblePopUp} className={styles.button}>
          <UserIcon className={styles.svgButton} />
        </button>
      </div>
    </header>
  );
};
