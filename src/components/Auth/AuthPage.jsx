/* eslint-disable no-undef */

import { useState } from 'react';
import styles from './AuthPage.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export const AuthPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://8a705e193c725f80.mokky.dev/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(res);
      console.log(data);
    };
    fetchData();

    //   fetchData();
    // }, []);
  };

  return (
    <div className={styles.authWrap}>
      <button className={styles.close} onClick={() => navigate('/')}>
        &times;
      </button>
      {/* <div className={styles.close}>&times;</div> */}
      <div>
        <span className={styles.select}>Вход</span>
        <NavLink to={ROUTES.register}>
          <span className={styles.selectАctive}> / Регистрация</span>
        </NavLink>
      </div>

      <form className={styles.inputWrap} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email* user@test.com">
        </input>

        <input
          className={styles.input}
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Пароль* 123">
        </input>

        <button type="submit" className={styles.buttonSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
};


// import { useState } from 'react';
// import styles from './AuthPage.module.css';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ROUTES } from '../../router/routes';

// export const AuthPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.authWrap}>
//       <button className={styles.close} onClick={() => navigate('/')}>
//         &times;
//       </button>
//       {/* <div className={styles.close}>&times;</div> */}
//       <div>
//         <span className={styles.select}>Вход</span>
//         <NavLink to={ROUTES.register}>
//           <span className={styles.selectАctive}> / Регистрация</span>
//         </NavLink>
//       </div>

//       <form className={styles.inputWrap}>
//         <input className={styles.input} type="email" placeholder="Email* user@test.com"></input>
//         <input className={styles.input} type="password" placeholder="Пароль* 123456"></input>
//         <button className={styles.buttonSubmit}>Войти</button>
//       </form>
//     </div>
//   );
// };
