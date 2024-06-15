/* eslint-disable react/no-unknown-property */
import styles from './Container.module.css';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export const MainContent = ({ children }) => {
  return (
    <div className={styles.mainContentWrap}>
      {children}
    </div>
  );
};
