import styles from "../styles/Search.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <input
          type="text"
          name="search"
          id="search"
          required
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
