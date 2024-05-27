import styles from './Container.module.css';
import { NavLink } from 'react-router-dom';
// import { ROUTER } from '../../../router/routes';

export const MainContent = ({ children }) => {
  return <div className={styles.mainContentWrap}>{children}</div>;
};
