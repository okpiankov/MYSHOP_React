import styles from './Search.module.css';
import SearchIcon  from '../../assets/icons/search2.svg'

export const Search = () => {
  const handleChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
  };

  return (
    <form className={styles.formWrap}>
      <input
        className={styles.search}
        type="search"
        name="search"
        onChange={handleChange}
        placeholder="Искать в магазине"
      ></input>
      <button className={styles.button}>
        <SearchIcon className={styles.svgSearch}/> 
      </button>
    </form>
  );
};
