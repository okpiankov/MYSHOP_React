import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import styles from './AuthPage.module.css';

export const AuthPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://8a705e193c725f80.mokky.dev/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => console.log(res));
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

      <form className={styles.inputWrap} onSubmit={handleSubmit} noValidate>
        <input
          className={styles.input}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email* user@test.com"
        ></input>

        <input
          className={styles.input}
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Пароль* 123"
        ></input>

        <button type="submit" className={styles.buttonSubmit}>
          Войти
        </button>
      </form>
    </div>
  );
};
