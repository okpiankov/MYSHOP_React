import styles from './EditUserPage.module.css';
import { useState } from 'react';

export const EditUserPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    role: '',
    email: '',
    password: '',
    avatar: '',
    tel: '',
  });

  const { fullName, role, email, password, avatar, tel } = formData;

  const handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`https://8a705e193c725f80.mokky.dev/users/${formData.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, role, email, password, avatar, tel }),
    });
    // .then(res => res.json())
    // .then(res => console.log(res));
  };

  return (
    <div className={styles.contentBox}>
      <div className={styles.editProductWrap}>
        <form className={styles.inputWrap} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="numder"
            value={formData.id}
            name="id"
            onChange={handleChange}
            placeholder="Введите id"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.fullName}
            name="fullName"
            onChange={handleChange}
            placeholder="Введите fullName"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.role}
            name="role"
            onChange={handleChange}
            placeholder="Введите role client"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Введите email"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.password}
            name="password"
            onChange={handleChange}
            placeholder="Введите password"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.avatar}
            name="avatar"
            onChange={handleChange}
            placeholder="Введите avatar"
          ></input>
          
          <input
            className={styles.input}
            type="text"
            value={formData.tel}
            name="tel"
            onChange={handleChange}
            placeholder="Введите telephone"
          ></input>

          <button type="submit" className={styles.buttonSubmit}>
            Редактировать данные
          </button>
        </form>
      </div>
      <div className={styles.patternWrap}>
        <h4>Скопируй данные отсюда:</h4>
        <p>fullName: Владимир</p>
        <p>role: client</p>
        <p>email: newuser@test.com</p>
        <p>password: 1234 </p>
        <p>avatar: https://img.freepik.com/free-photo/view-funny-animal_23-2151098397.jpg</p>
        <p>avatar: https://img.freepik.com/free-vector/hand-drawn-cartoon-moose-illustration_23-2150443667.jpg</p>
      </div>
    </div>
  );
};
