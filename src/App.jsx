import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, UserRound, ShoppingBag } from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    "Sarees",
    "Handloom Textiles",
    "Traditional Wear",
    "Handicrafts",
    "Home Decor",
    "Vintage & Antique",
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200">

      {/* ================= DESKTOP NAVBAR ================= */}
      {/* hidden on mobile, visible from md (768px) onwards */}

      <div className="hidden md:flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-semibold">
          Odisha <span className="text-yellow-600">Vintage</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="flex items-center gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/new-arrivals">New Arrivals</Link>

          {/* Desktop Categories Dropdown */}
          <div className="relative group">
            <button className="py-2">Categories ▾</button>

            <div className="absolute left-0 top-full z-50 hidden w-56 bg-white shadow-lg border border-gray-100 group-hover:block">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/products"
                  className="block px-4 py-3 hover:bg-yellow-50"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/bestsellers">Bestsellers</Link>
        </nav>

        {/* Desktop Search and Icons */}
        <div className="flex items-center gap-5">

          <input
            type="text"
            placeholder="Search products..."
            className="w-48 border border-gray-200 px-3 py-2 text-sm outline-none focus:border-yellow-500"
          />

          <Link to="/wishlist" aria-label="Wishlist">
            <Heart size={20} />
          </Link>

          <Link to="/profile" aria-label="Profile">
            <UserRound size={20} />
          </Link>

          <Link to="/cart" aria-label="Shopping cart">
            <ShoppingBag size={20} />
          </Link>

        </div>
      </div>


      {/* ================= MOBILE NAVBAR ================= */}
      {/* visible on mobile, hidden from md (768px) onwards */}

      <div className="flex md:hidden items-center justify-between px-4 py-4">

        {/* Hamburger Button — LEFT */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          className="p-1"
        >
          <Menu size={25} />
        </button>

        {/* Logo — CENTER */}
        <Link to="/" className="text-xl font-serif font-semibold">
          Odisha <span className="text-yellow-600">Vintage</span>
        </Link>

        {/* Cart — RIGHT */}
        <Link to="/cart" aria-label="Shopping cart">
          <ShoppingBag size={22} />
        </Link>

      </div>


      {/* ================= MOBILE MENU DRAWER ================= */}
      {/* opens when the hamburger is clicked */}

      {isMenuOpen && (
        <div className="md:hidden">

          {/* Background Overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40"
          />

          {/* Drawer Panel */}
          <aside className="fixed left-0 top-0 z-50 h-full w-72 max-w-[85vw] overflow-y-auto bg-white shadow-xl">

            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b p-5">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-xl"
              >
                Odisha <span className="text-yellow-600">Vintage</span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Drawer Navigation */}
            <nav className="flex flex-col p-4">

              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="border-b py-4"
              >
                Home
              </Link>

              <Link
                to="/new-arrivals"
                onClick={() => setIsMenuOpen(false)}
                className="border-b py-4"
              >
                New Arrivals
              </Link>

              {/* Mobile Categories */}
              <details className="border-b">
                <summary className="cursor-pointer py-4">
                  Categories
                </summary>

                <div className="pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to="/products"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-3 text-sm text-gray-600"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                to="/bestsellers"
                onClick={() => setIsMenuOpen(false)}
                className="border-b py-4"
              >
                Bestsellers
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 border-b py-4"
              >
                <Heart size={19} />
                Wishlist
              </Link>

              <Link
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 border-b py-4"
              >
                <UserRound size={19} />
                My Profile
              </Link>

              {/* Show Logout only for logged-in users */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  // Call your logout function here.
                }}
                className="py-4 text-left text-red-600"
              >
                Logout
              </button>

            </nav>
          </aside>
        </div>
      )}

    </header>
  );
};

export default App;