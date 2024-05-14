
import { useState, useEffect } from 'react';
import styles from './RegisterPage.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
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
      const res = await fetch('https://8a705e193c725f80.mokky.dev/register', {
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
        <NavLink to={ROUTES.auth}>
          <span className={styles.selectАctive}>Вход / </span>
        </NavLink>
        <span className={styles.select}>Регистрация</span>
      </div>

      <form className={styles.inputWrap} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={formData.fullName}
          name="fullName"
          onChange={handleChange}
          placeholder="Ваше имя*"
          required
          autoComplete="off">
        </input>

        <input
          className={styles.input}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email*"
          required
          autoComplete="off">
        </input>

        <input
          className={styles.input}
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Придумайте пароль*"
          required
          autoComplete="off">
        </input>

        <input className={styles.input} type="tel" placeholder="Телефон"></input>

        <button type="submit" className={styles.buttonSubmit}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

