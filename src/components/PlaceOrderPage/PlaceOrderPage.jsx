import { useState } from 'react';
import styles from './PlaceOrderPage.module.css';

export const PlaceOrderPage = () => {
  const [formData, setFormData] = useState({
    // id: '',
    fullName: '',
    email: '',
    tel: '',
    delivery: '',
  });

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

    fetch('https://8a705e193c725f80.mokky.dev/orders', {
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
    <>
    <h2>Оформление заказа</h2>
    <div className={styles.contentBox}>
      <div className={styles.editProductWrap}>
        <form className={styles.inputWrap} onSubmit={handleSubmit}>
      
          <input
            className={styles.input}
            type="text"
            value={formData.fullName}
            name="fullName"
            onChange={handleChange}
            placeholder="Введите имя"
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
            value={formData.tel}
            name="tel"
            onChange={handleChange}
            placeholder="Введите телефон"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.delivery}
            name="delivery"
            onChange={handleChange}
            placeholder="Введите способ доставки"
          ></input>

          <button type="submit" className={styles.buttonSubmit}>
            Оформить заказ
          </button>
        </form>
      </div>
      <div className={styles.patternWrap}>
        <h4>Товары:</h4>
        <p>Смартфон Apple iPhone 15</p>
        <p>Смартфон Xiaomi 14</p>
        <h4>Итого:</h4>
        <h4>200000 Р</h4>
      </div>
  
    </div>
    </>
  );
};