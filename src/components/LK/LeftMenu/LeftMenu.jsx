import { NavLink } from 'react-router-dom';
import styles from './LeftMenu.module.css';
import { ROUTES } from '../../../router/routes';
import { useEffect, useState } from 'react';

export const LeftMenuCabinet = () => {
  const [avatar, setAvatar] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      return;
    }

    const {
      data: { role, avatar, fullName },
    } = user;

    if (role === 'client') {
      setAvatar(avatar);
      setFullName(fullName);
    } else {
      return;
    }
  }, []);

  return (
    <nav className={styles.leftMenuWrap}>
      <img src={avatar} className={styles.avatar} alt="picture" />
      <div className={styles.user}>{fullName}</div>

      <NavLink to={ROUTES.plug} className={styles.link}>
        Личная информация
      </NavLink>
      <NavLink to={ROUTES.basket} className={styles.link}>
        Моя корзина
      </NavLink>
      <NavLink to={ROUTES.order} className={styles.link}>
        Мои заказы
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Купленные товары
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Баланс средств
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Сообщения
      </NavLink>
    </nav>
  );
};
