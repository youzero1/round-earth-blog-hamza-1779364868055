import { useParams, Link } from 'react-router-dom';
import { POSTS, getCategories } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import clsx from 'clsx';

export default function Category() {
  const { name } = useParams<{ name: string }>();
  const categories = getCategories();
  const active = categories.find((c) => c.toLowerCase() === (name || '').toLowerCase());
  const posts = active ? POSTS.filter((p) => p.category === active) : [];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-sm text-earth-600 font-semibold uppercase tracking-wider">Category</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-1">{active || 'Not found'}</h1>
        {active && (
          <p className="text-gray-600 mt-2">
            {posts.length} stor{posts.length === 1 ? 'y' : 'ies'} in {active.toLowerCase()}.
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <Link
            key={c}
            to={`/category/${c.toLowerCase()}`}
            className={clsx(
              'px-4 py-1.5 rounded-full text-sm border transition-colors',
              c === active
                ? 'bg-earth-600 text-white border-earth-600'
                : 'bg-white border-earth-100 text-gray-700 hover:border-earth-500'
            )}
          >
            {c}
          </Link>
        ))}
      </div>

      {active ? (
        posts.length === 0 ? (
          <p className="text-gray-500">No stories here yet — check back soon.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        )
      ) : (
        <p className="text-gray-500">That category doesn't exist. Try one of the chips above.</p>
      )}
    </div>
  );
}
