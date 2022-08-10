import styles from "../styles/Search.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search..."
          aria-label="Search"
        />
        <button type="submit" className={styles.searchSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
