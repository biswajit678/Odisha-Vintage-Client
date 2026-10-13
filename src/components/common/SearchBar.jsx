import { useState, useEffect, useRef } from "react";import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const searchTerm = query.trim();

    if (!searchTerm) return;

    navigate(`/products?search=${encodeURIComponent(searchTerm)}`);

    setSearchOpen(false);
    setQuery("");
  }

  useEffect(() => {
  function handleClickOutside(event) {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target)
    ) {
      setSearchOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div ref={searchRef} className="relative">
      {/* Search Icon */}
      <button
        type="button"
        aria-label="Search products"
        aria-expanded={searchOpen}
        onClick={() => setSearchOpen(!searchOpen)}
        className="flex items-center transition-colors hover:text-[var(--color-primary)]"
      >
        {searchOpen ? (
          <X size={21} strokeWidth={1.6} />
        ) : (
          <Search size={21} strokeWidth={1.6} />
        )}
      </button>

      {/* Search Input */}
      {searchOpen && (
        <form
          onSubmit={handleSearch}
          className="fixed left-3 right-3 top-[80px] z-[100] flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)] p-3 shadow-lg sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-4 sm:w-80"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            autoFocus
            className="min-w-0 flex-1 bg-transparent text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-muted)]"
          />

          <button
            type="submit"
            aria-label="Submit search"
            className="shrink-0 transition-colors hover:text-[var(--color-primary)]"
          >
            <Search size={19} strokeWidth={1.6} />
          </button>
        </form>
      )}
    </div>
  );
}

export default SearchBar


;