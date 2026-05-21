import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Globe2, Menu, X, Search } from 'lucide-react';
import clsx from 'clsx';
import { getCategories } from '@/lib/posts';

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const categories = getCategories();

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-earth-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-full bg-earth-600 grid place-items-center text-white group-hover:rotate-12 transition-transform">
            <Globe2 className="w-5 h-5" />
          </span>
          <span className="font-semibold text-lg tracking-tight">
            round<span className="text-earth-600">Earth</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              clsx('hover:text-earth-700 transition-colors', isActive ? 'text-earth-700 font-medium' : 'text-gray-700')
            }
          >
            Home
          </NavLink>
          {categories.map((c) => (
            <NavLink
              key={c}
              to={`/category/${c.toLowerCase()}`}
              className={({ isActive }) =>
                clsx('hover:text-earth-700 transition-colors', isActive ? 'text-earth-700 font-medium' : 'text-gray-700')
              }
            >
              {c}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              clsx('hover:text-earth-700 transition-colors', isActive ? 'text-earth-700 font-medium' : 'text-gray-700')
            }
          >
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="hidden md:grid w-9 h-9 place-items-center rounded-full hover:bg-earth-50 text-gray-600"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            className="md:hidden w-9 h-9 grid place-items-center rounded-full hover:bg-earth-50 text-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-earth-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2 text-sm">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            {categories.map((c) => (
              <Link key={c} to={`/category/${c.toLowerCase()}`} onClick={() => setOpen(false)} className="py-2">
                {c}
              </Link>
            ))}
            <Link to="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
          </div>
        </div>
      )}
    </header>
  );
}
