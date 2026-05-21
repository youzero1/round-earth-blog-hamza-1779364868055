import { Globe2, Twitter, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-earth-100 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-earth-600 grid place-items-center text-white">
              <Globe2 className="w-5 h-5" />
            </span>
            <span className="font-semibold text-lg">
              round<span className="text-earth-600">Earth</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            Stories from every corner of our planet — nature, climate, culture, and the people shaping our future.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-earth-700">Home</Link></li>
            <li><Link to="/category/nature" className="hover:text-earth-700">Nature</Link></li>
            <li><Link to="/category/ocean" className="hover:text-earth-700">Ocean</Link></li>
            <li><Link to="/about" className="hover:text-earth-700">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">Follow</h4>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-earth-50 grid place-items-center text-earth-700 hover:bg-earth-100"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-earth-50 grid place-items-center text-earth-700 hover:bg-earth-100"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-earth-50 grid place-items-center text-earth-700 hover:bg-earth-100"><Github className="w-4 h-4" /></a>
          </div>
          <p className="mt-4 text-xs text-gray-500">© {new Date().getFullYear()} roundEarth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
