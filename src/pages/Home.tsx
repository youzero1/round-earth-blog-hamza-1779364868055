import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { POSTS } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Newsletter from '@/components/Newsletter';
import { formatDate } from '@/lib/format';

export default function Home() {
  const featured = POSTS.find((p) => p.featured) || POSTS[0];
  const otherFeatured = POSTS.filter((p) => p.featured && p.id !== featured.id).slice(0, 2);
  const recent = POSTS.filter((p) => p.id !== featured.id).slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-50 text-earth-700 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" /> New stories every week
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Stories from every corner of our <span className="text-earth-600">round earth</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Long-form journalism on nature, climate, culture and the people quietly reshaping our planet's future.
          </p>
        </div>

        {/* Featured grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-6 mt-6">
          <Link to={`/post/${featured.slug}`} className="lg:col-span-2 group block">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 sm:p-8 text-white">
                <span className="inline-block bg-earth-600 text-xs uppercase tracking-wider font-semibold px-2 py-1 rounded">
                  {featured.category}
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-bold leading-tight max-w-2xl">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-200 max-w-2xl line-clamp-2">
                  {featured.excerpt}
                </p>
                <div className="mt-3 text-xs text-gray-300 flex items-center gap-2">
                  <span>{featured.author}</span>
                  <span>•</span>
                  <span>{formatDate(featured.date)}</span>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-6">
            {otherFeatured.map((p) => (
              <Link key={p.id} to={`/post/${p.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider font-semibold bg-earth-600 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{p.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Latest stories</h2>
            <p className="text-gray-600 mt-1">Fresh dispatches from our writers in the field.</p>
          </div>
          <Link to="/category/nature" className="hidden sm:inline-flex items-center gap-1 text-sm text-earth-700 hover:gap-2 transition-all">
            Explore all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recent.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 mb-16">
        <Newsletter />
      </section>
    </div>
  );
}
