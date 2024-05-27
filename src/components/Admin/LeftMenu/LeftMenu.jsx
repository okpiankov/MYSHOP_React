import { NavLink } from 'react-router-dom';
import styles from './LeftMenu.module.css';
import { ROUTES } from '../../../router/routes';
import { useEffect, useState } from 'react';

export const LeftMenuAdmin = () => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      return;
    }

    const {
      data: { role, avatar },
    } = user;

    if (role === 'admin') {
      setAvatar(avatar);
    } else {
      return;
    }
  }, []);
  return (
    <nav className={styles.leftMenuWrap}>
      <img src={avatar} className={styles.avatar} alt="admin" />
      <div className={styles.user}>Admin</div>

      <NavLink to={ROUTES.addProduct} className={styles.link}>
        Добавить / удалить товар
      </NavLink>
      <NavLink to={ROUTES.editProduct} className={styles.link}>
        Редактировать товар
      </NavLink>
      <NavLink to={ROUTES.addUser} className={styles.link}>
        Добавить / удалить пользователя
      </NavLink>
      <NavLink to={ROUTES.editUser} className={styles.link}>
        Редактировать данные пользователя
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Редактировать заказ
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Редактировать категорию товаров
      </NavLink>
      <NavLink to={ROUTES.plug} className={styles.link}>
        Редактировать акции
      </NavLink>
    </nav>
  );
};
