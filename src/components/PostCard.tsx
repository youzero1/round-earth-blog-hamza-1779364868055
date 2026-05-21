import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { Post } from '@/types';
import { formatDate } from '@/lib/format';

type PostCardProps = {
  post: Post;
  variant?: 'default' | 'compact';
};

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  if (variant === 'compact') {
    return (
      <Link to={`/post/${post.slug}`} className="flex gap-3 group">
        <img
          src={post.cover}
          alt={post.title}
          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
        />
        <div>
          <span className="text-xs font-medium text-earth-600 uppercase tracking-wider">{post.category}</span>
          <h4 className="text-sm font-semibold mt-1 leading-snug group-hover:text-earth-700 line-clamp-2">
            {post.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{formatDate(post.date)}</p>
        </div>
      </Link>
    );
  }

  return (
    <article className="group">
      <Link to={`/post/${post.slug}`} className="block overflow-hidden rounded-xl mb-4">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
        <span className="font-semibold text-earth-600 uppercase tracking-wider">{post.category}</span>
        <span>•</span>
        <span>{formatDate(post.date)}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} min</span>
      </div>
      <Link to={`/post/${post.slug}`}>
        <h3 className="text-xl font-bold leading-snug group-hover:text-earth-700 transition-colors">
          {post.title}
        </h3>
      </Link>
      <p className="mt-2 text-gray-600 line-clamp-2">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-3">
        <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full" />
        <span className="text-sm text-gray-700">{post.author}</span>
      </div>
    </article>
  );
}
