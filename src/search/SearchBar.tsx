import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import styles from "../styles/Search.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
  isLoading?: boolean;
  error?: string;
}
export default function SearchBar({
  onSubmit,
  isLoading,
  error = "",
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.search}>
        <div className={styles.searchBar}>
          <input
            type="text"
            name="search"
            id="search"
            required
            onChange={handleInputChange}
            value={inputValue}
            className={styles.searchInput}
            placeholder="Search..."
            aria-label="Search"
          />
          <span className={styles.errorText}>{error}</span>
        </div>

        <button
          type="submit"
          className={`${styles.searchSubmit} ${
            isLoading ? styles.searchSubmitLoading : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Searching" : "Search"}
        </button>
      </div>
    </form>
  );
}
