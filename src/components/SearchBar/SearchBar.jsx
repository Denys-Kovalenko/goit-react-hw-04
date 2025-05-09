import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(query);
    setInput("");
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <button type="submit" className={styles.iconButton}>
            <IoSearchOutline size={20} />
          </button>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.input}
          />
        </div>
      </form>
    </header>
  );
}

export default SearchBar;
