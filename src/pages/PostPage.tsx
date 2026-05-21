import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { formatDate } from '@/lib/format';
import Prose from '@/components/Prose';
import PostCard from '@/components/PostCard';
import Comments from '@/components/Comments';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedPosts(post, 3);

  return (
    <article>
      {/* Hero image */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12 text-white w-full">
            <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-200 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to home
            </Link>
            <span className="inline-block bg-earth-600 text-xs uppercase tracking-wider font-semibold px-2 py-1 rounded">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">{post.title}</h1>
            <p className="mt-3 text-lg text-gray-200 max-w-2xl">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-wrap items-center gap-4 border-b border-earth-100">
        <img src={post.authorAvatar} alt={post.author} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <div className="font-semibold">{post.author}</div>
          <div className="text-sm text-gray-500">Field correspondent, roundEarth</div>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} min read</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <Prose content={post.content} />

        <div className="mt-10 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-earth-50 text-earth-700">
              #{t}
            </span>
          ))}
        </div>

        <Comments postId={post.id} />
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 border-t border-earth-100">
          <h2 className="text-2xl font-bold mb-8">Keep reading</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
