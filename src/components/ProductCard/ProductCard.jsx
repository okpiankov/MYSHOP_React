/* eslint-disable no-undef */
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Apple from '../../assets/images/iPhone.jpg';
import styles from './ProductCard.module.css';
import { ROUTES } from '../../router/routes';


export const ProductCard = () => {
  const [products, setProducts] = useState(null);

  // // 3й вариант:
  // useEffect(() => {
  //   fetch("https://8a705e193c725f80.mokky.dev/product")
  //     .then(response => response.json())
  //     .then(data => setProducts(data));
  //     // console.log(data)
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      const respons = await fetch("https://8a705e193c725f80.mokky.dev/product");
      const data = await respons.json();
      // console.log(data);
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <strong>ProductCard</strong>
      <div className={styles.productsWrap}>
        {products?.map(({ id, image, name, description, price }) => (
          <div key={id} className={styles.cardWrap}>
<NavLink to={`${ROUTES.productID}/${id}`}>
            <img src={image} className={styles.image}></img>
</NavLink>            
            <span>{name}</span>
            <span>{description}</span>
            <span>
              <strong>{price}</strong>
            </span>
            <button className={styles.button}>Купить</button>
          </div>
        ))}
      </div>
    </>
  );
};





// // 2й вариант:
// const products = [
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
//   { image: Apple, name: 'Смартфон Apple iPhone 15', description: 'Pro Max 256GB Black Titanium', price: '1300 $' },
// ];
// return (
//   <>
//     <strong>ProductCard</strong>
//     <div className={styles.productsWrap}>
//       {products.map(({ image, name, description, price }) => (
//         <div key={name} className={styles.cardWrap}>
//           <img src={image} className={styles.image}></img>
//           <span>{name}</span>
//           <span>{description}</span>
//           <span>
//             <strong>{price}</strong>
//           </span>
//           <button className={styles.button}>Купить</button>
//         </div>
//       ))}
//     </div>
//   </>
//   );
// };

// // 1й вариант:
// return (
// <>
//   ProductCard
//   <div className={styles.productsWrap}>
//     <div className={styles.cardWrap}>
//       <img src={Apple} className={styles.image}></img>
//       <span>Смартфон Apple iPhone 15</span>
//       <span>Pro Max 256GB Black Titanium</span>
//       <span>
//         <strong>1300 $</strong>
//       </span>
//       <button className={styles.button}>Купить</button>
//     </div>
//   </div>
// </>
// Сколько объектов(5шт.) в массиве указано столько карточек вернет map!!!
// При возврате разметки через map, map оборачивать в скобки {}
//     const products = [
//       { image: Apple },
//       { name: 'Смартфон Apple iPhone 15' },
//       { description: 'Pro Max 256GB Black Titanium' },
//       { price: '1300 $' },
//     ];
//   );
// };