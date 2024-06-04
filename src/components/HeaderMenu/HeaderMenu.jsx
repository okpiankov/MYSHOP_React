import { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { ROUTES } from '../../router/routes';
import { Search } from '../SearchPage/Search';
import CartIcon from '../../assets/icons/cart2.svg';
import UserIcon from '../../assets/icons/user1.svg';
import TelIcon from '../../assets/icons/tel.svg';

export const HeaderMenu = ({ setPopUpAuth }) => {
  const handleVisiblePopUp = () => setPopUpAuth(true);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  //user - это состояние страницы (это не объект из LS)  обрабатываю через useState+useEffect
  const [user, setUser] = useState({});

  useEffect(() => {
    const userLS = JSON.parse(localStorage.getItem('user'));
    setUser(userLS);
  }, []);

  // Функция проверки роли, редиректа и смены состояния PopUp
  const handleUserClick = () => {
    if (user?.data?.role === 'client') {
      navigate('/cabinet');
      return;
    }

    if (user?.data?.role === 'admin') {
      navigate('/admin');
      return;
    }
    handleVisiblePopUp();
  };

  //Функция выхода из авторизации
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(prev => {});

    if (pathname.includes(ROUTES.admin) || pathname.includes(ROUTES.cabinet)) {
      navigate('/');
    }
  };

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

        {/* На одной кнопке  несколько  событий onClick
         и поэтому все эти действия включены в одну функцию handleUserClick */}
        <button type="button" onClick={handleUserClick} className={styles.button}>
          {/* <UserIcon className={styles.svgButton} /> */}
          <UserIcon className={`${styles.svgButton} ${user?.token ? styles.LogInButton : ''}`} />
        </button>

        {user?.token && (
          <button className={styles.buttonLogout} onClick={handleLogout}>
            Выйти
          </button>
        )}

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

// export const HeaderMenu = ({ setPopUpAuth }) => {
//   //передача пропса {setPopUpAuth} через скобки{}
//   const handleVisiblePopUp = () => setPopUpAuth(true);
//   const { pathname } = useLocation();
//   // console.log(pathname)

//   //Использовать нужно не компонент <Navigate to="/" /> а хук useNavigate, тк хук более передсказуемо работает
//   //и если авторизованный пользователь находясь не на стр. лич.кабинета нажмет на иконку, то попадет снова в личный кабинет
//   const navigate = useNavigate();

//   //user - это состояние страницы (это не объект из LS)  обрабатываю через useState+useEffect
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const userLS = JSON.parse(localStorage.getItem('user'));
//     setUser(userLS);
//   }, []);
//   // const user = JSON.parse(localStorage.getItem('user'));

//   // В функции на иконку одновременно присутствуют несколько действий:
//   // проверка на admin/client редирект и вызов функции смены состояния PopUp
//   // user это переменная - начальное состояние из  useState
//   // При повторном нажатии после авторизации на иконку авторизации происходит переход на стр. кабинет/админ тк navigate('/url')
//   // Функция проверки роли редиректа и смены состояния PopUp

//   const handleUserClick = () => {
//     // не нужен объект из LS тк user - это состояние страницы
//     // const user = JSON.parse(localStorage.getItem('user'));

//     if (user?.data?.role === 'client') {
//       navigate('/cabinet');
//       return;
//     }

//     if (user?.data?.role === 'admin') {
//       navigate('/admin');
//       return;
//     }
//     // Передается именно вызов функции а не сама функция
//     handleVisiblePopUp();
//   };

//   //Функция выхода из авторизации
//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     setUser(prev => {});

//     if (pathname.includes(ROUTES.admin) || pathname.includes(ROUTES.cabinet)) {
//       navigate('/');
//     }
//   };

{/* <NavLink to={ROUTES.cabinet} className={styles.link}>
Кабинет
</NavLink>
<NavLink to={ROUTES.admin} className={styles.link}>
Админ
</NavLink>

<NavLink to={ROUTES.auth}>Войти</NavLink>
<NavLink to={ROUTES.authFormik}>Войти</NavLink> */}
