import { useState } from 'react';
import styles from './AuthPage.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export const AuthPageFormik = () => {
   
  const handleSubmit = values => {
    // e.preventDefault(); не нужно
    console.log(values);
    
    fetch('https://8a705e193c725f80.mokky.dev/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
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

      <Formik initialValues={{ email: '', password: '', }} onSubmit={handleSubmit}>
        <Form className={styles.inputWrap}>
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email* user@test.com"
          />
          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="Пароль* 123"
          />
          <button type="submit" className={styles.buttonSubmit}>
            Войти
          </button>
        </Form>
      </Formik>
    </div>
  );
};
