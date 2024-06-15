import { useState } from 'react';
import { Footer } from '../Footer/Footer';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { PopUpAuth } from '../PopUp/PopUpAuth';
import styles from './Container.module.css';
import { MainContent } from './MainContent';

export const PageWrapper = ({ children }) => {
  // объект user нужно получать из глобального состояния типа: редакс или контекст:
  const user = JSON.parse(localStorage.getItem('user'));
  const [popUpAuth, setPopUpAuth] = useState(false);

  // состояние для бургер меню при адаптации под планшет
  const [leftMenu, setLeftMenu] = useState(true);

 
  return (
    <div className={styles.mainWrap}>
      <HeaderMenu setPopUpAuth={setPopUpAuth} setLeftMenu={setLeftMenu} leftMenu={leftMenu}  />
      <div className={`${styles.container} ${styles.innerWrap} ${leftMenu === true ? styles.innerWrapTrue : ''}`}>
        {leftMenu && <LeftMenu />}
        <MainContent >
          {children}
        </MainContent>
      </div>
      <Footer />
      <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} />
      {/* {!user?.token && <PopUpAuth popUpAuth={popUpAuth} setPopUpAuth={setPopUpAuth} />} */}
    </div>
  );
};
