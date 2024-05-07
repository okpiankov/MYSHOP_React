import { Footer } from '../Footer/Footer';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import styles from './Container.module.css';
import { MainContent } from './MainContent';

export const PageWrapper = ({ children }) => {
  return (
    <div className={styles.mainWrap}>
      <HeaderMenu />
      <div className={`${styles.container} ${styles.innerWrap}`}>
        <LeftMenu />
        <MainContent>{children}</MainContent>
      </div>
      <Footer />
    </div>
  );
};


