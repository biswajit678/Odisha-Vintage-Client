import {
  UserRound,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)]">

      {/* Main Navbar */}
      <div className="grid min-h-[82px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">

        {/* Left Navigation - Desktop */}
        <nav className="hidden items-center gap-7 lg:flex">

          <button
            type="button"
            className="group flex items-center gap-1 py-3 text-xs font-medium uppercase tracking-wider transition-colors hover:text-[var(--color-primary)]"
          >
            Categories
            <ChevronDown
              size={14}
              className="transition-transform group-hover:rotate-180"
            />
          </button>

          <Link
            to="/products"
            className="py-3 text-xs font-medium uppercase tracking-wider transition-colors hover:text-[var(--color-primary)]"
          >
            Collections
          </Link>

          <a
            href="#our-story"
            className="py-3 text-xs font-medium uppercase tracking-wider transition-colors hover:text-[var(--color-primary)]"
          >
            Blogs
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center -ml-10 lg:hidden"
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Brand Logo */}
        <Logo />

        {/* Right Actions */}
        <div className="col-start-3 flex items-center justify-self-end gap-3 sm:gap-5">

          {/* Search */}
          <SearchBar />
          {/* Account */}
          <Link
            to="/login"
            aria-label="My account"
            className="hidden transition-colors hover:text-[var(--color-primary)] sm:flex"
          >
            <UserRound size={21} strokeWidth={1.6} />
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            <Heart size={21} strokeWidth={1.6} />
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="transition-colors hover:text-[var(--color-primary)]"
          >
            <ShoppingBag size={21} strokeWidth={1.6} />
          </Link>

        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="absolute left-0 top-full flex w-full flex-col border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 shadow-lg lg:hidden">

          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-[var(--color-border)] py-4 text-sm"
          >
            All Products
          </Link>

          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-[var(--color-border)] py-4 text-sm"
          >
            Collections
          </Link>

          <a
            href="#our-story"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-[var(--color-border)] py-4 text-sm"
          >
            Our Story
          </a>

          <Link
            to="/login"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-[var(--color-border)] py-4 text-sm"
          >
            My Account
          </Link>

          <Link
            to="/wishlist"
            onClick={() => setMobileMenuOpen(false)}
            className="border-b border-[var(--color-border)] py-4 text-sm"
          >
            My Wishlist
          </Link>

          <Link
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="py-4 text-sm"
          >
            Shopping Bag
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;