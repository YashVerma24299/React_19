import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">
          MyApp
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-black transition">
            About
          </Link>
        </nav>

        {/* Button */}
        <button className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
