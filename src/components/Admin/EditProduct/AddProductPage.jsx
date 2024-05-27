import styles from './AddProductPage.module.css';
import { useState } from 'react';
import { DeleteProductPage } from './DeleteProductPage';

export const AddProductPage = () => {
  const [formData, setFormData] = useState({
    // id: '',
    type: '',
    image: '',
    name: '',
    description: '',
    price: '',
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

    fetch('https://8a705e193c725f80.mokky.dev/product', {
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
    <div className={styles.contentBox}>
      <div className={styles.editProductWrap}>
        <form className={styles.inputWrap} onSubmit={handleSubmit}>
          {/* <input
            className={styles.input}
            type="numder"
            value={formData.id}
            name="id"
            onChange={handleChange}
            placeholder="Введите id"
          ></input> */}

          <input
            className={styles.input}
            type="text"
            value={formData.type}
            name="type"
            onChange={handleChange}
            placeholder="Введите type: laptop/phone/TV"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.image}
            name="image"
            onChange={handleChange}
            placeholder="Введите URL image"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Введите name"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.description}
            name="description"
            onChange={handleChange}
            placeholder="Введите description"
          ></input>

          <input
            className={styles.input}
            type="text"
            value={formData.price}
            name="price"
            onChange={handleChange}
            placeholder="Введите price ₽"
          ></input>

          <button type="submit" className={styles.buttonSubmit}>
            Добавить товар
          </button>
        </form>
      </div>
      <div className={styles.patternWrap}>
        <h4>Скопируй данные отсюда:</h4>
        <p>name: Смартфон Apple iPhone 15</p>
        <p>type: phone</p>
        <p>description: Pro Max 256GB Black Titanium</p>
        <p>price: 153 999 ₽</p>
        <p>URL image: https://img.mvideo.ru/Big/30069510bb.jpg</p>
        <p>Перейди в категории товаров и убедись что все работает</p>
      </div>
      <DeleteProductPage />
    </div>
  );
};
