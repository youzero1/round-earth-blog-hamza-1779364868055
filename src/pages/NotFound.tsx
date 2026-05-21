import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="inline-grid place-items-center w-14 h-14 rounded-full bg-earth-600 text-white mb-6">
        <Compass className="w-7 h-7" />
      </div>
      <h1 className="text-3xl font-bold">You're off the map.</h1>
      <p className="mt-2 text-gray-600">This page seems to have wandered off into the wilderness.</p>
      <Link to="/" className="inline-block mt-6 px-5 py-2.5 rounded-full bg-earth-600 text-white font-medium hover:bg-earth-700">
        Back to home
      </Link>
    </div>
  );
}
