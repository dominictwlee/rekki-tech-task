import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import styles from "../styles/Search.module.css";

interface SearchBarProps {
  onSubmit: (value: string) => void;
}
export default function SearchBar({ onSubmit }: SearchBarProps) {
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
        <button type="submit" className={styles.searchSubmit}>
          Search
        </button>
      </div>
    </form>
  );
}
