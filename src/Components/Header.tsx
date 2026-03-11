import { useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  return (
    <header>
      <label htmlFor="searchbar">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          ref={inputRef}
          type="text"
          id="searchbar"
          value={searchQuery}
          placeholder="Поиск"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={handleClear}
          className={searchQuery ? "visible" : "invisible"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </label>
    </header>
  );
}

export default Header;
