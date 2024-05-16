import { useState } from 'react';
import styles from './AuthPage.module.css';
import { emailRegex, validateEmail, validatePassword } from './validate';

export const AuthPage = ({ setForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'email' && value !== ' ') {
      validateEmail(value);
    }
    if (name === 'password' && value !== ' ') {
      validatePassword(value);
    }
  };

  const validateEmail = value => {
    const isValid = value.match(emailRegex);
    if (isValid) {
      setEmailError('');
    } else {
      setEmailError('Это не похоже на емейл');
    }
  };

  const validatePassword = value => {
    const isValid = value.length > 3 && value.length < 8;
    if (isValid) {
      setPasswordError('');
    } else {
      setPasswordError('Это не похоже на пароль');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

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
      <div>
        <span className={styles.select}>Вход</span>
        {/* В setForm можно передавать любую строку например: 'register' */}
        <button className={styles.selectАctive} onClick={() => setForm('register')}>
          / Регистрация{' '}
        </button>
      </div>

      <form className={styles.inputWrap} onSubmit={handleSubmit} noValidate>
        {emailError && emailError}
        <input
          className={styles.input}
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email* user@test.com"
        ></input>
        {passwordError && passwordError}
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

// // Тип данных в State и setState д/б одинаковый
// const [emailError, setEmailError] = useState('');

// Конкретный вид event приходит автоматически в функции в зависимости
// от используемого обаботчика событий onChange={handleChange}, onSubmit={handleSubmit} и т.д.
//
// const handleChange = event => {
//   console.log(event.target.value);
//   const { name, value } = event.target;
//   setFormData(prevState => ({
//     ...prevState,
//     [name]: value,
//   }));
//   // За место [name] подставляется конкретное имя(идинтификатор) инпута
//   // За место value подставляется динамически меняющееся значение в поле инпута

//   if (name === 'email' && event.target.value !== ' ') {
//     return validateEmail(event.target.value);
//   }
//   if (name === 'password' && event.target.value !== ' ') {
//     return validatePassword(event.target.value);
//   }
//   // validateEmail(event.target.value)
//   // validatePassword(event.target.value)
// };
