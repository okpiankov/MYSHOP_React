import { NavLink } from 'react-router-dom';
import styles from './OrderCard.module.css';
// не забывай ипортировать ROUTES:
import { ROUTES } from '../../router/routes';
import DeletIcon from '../../assets/icons/delete1.svg';

export const OrderCard = () => {
  return (
    <div className={styles.orderCardWrap}>
      <div className={styles.contentBox1}>
        <div className={styles.order}>
          <NavLink to={ROUTES.plug}>
            Заказ от 27 мая <br></br>№ 7777777777-7777
          </NavLink>
        </div>
        <div className={styles.name}>
          <span>Смартфон Apple iPhone 15</span>
          <span>оплачено 150 000 Р</span>
        </div>
      </div>
      <div className={styles.contentBox2}>
        <div className={styles.delivery}>
          <span>Доставка в пункт выдачи</span>
          <span>Пункт Ozon, Россия, Нижний Новгород, Ванеева улица, 1</span>
          <NavLink to={ROUTES.plug} className={styles.link}>
            Информация о пункте выдачи
          </NavLink>
          <span className={styles.date}>Ожидаемая дата: 1 июня</span>
          <div className={styles.status}>Передается в доставку</div>
        </div>
        <div className={styles.name}>
          <span>Получатель</span>
          <span>User</span>
          <span>89305555555</span>
          <span>user@test.com</span>
        </div>
      </div>
    </div>
  );
};
