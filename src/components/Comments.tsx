import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { Comment } from '@/types';
import { formatDate } from '@/lib/format';

type CommentsProps = {
  postId: string;
};

export default function Comments({ postId }: CommentsProps) {
  const [comments, setComments] = useLocalStorage<Comment[]>(`comments-${postId}`, []);
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newComment: Comment = {
      id: Math.random().toString(36).slice(2),
      postId,
      author: name.trim(),
      content: text.trim(),
      date: new Date().toISOString(),
    };
    setComments([newComment, ...comments]);
    setName('');
    setText('');
  };

  return (
    <section className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-5 h-5 text-earth-600" />
        <h3 className="text-xl font-bold">Discussion ({comments.length})</h3>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-earth-100 rounded-xl p-4 mb-6">
        <input
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-3 py-2 border-b border-gray-100 outline-none focus:border-earth-500"
        />
        <textarea
          value={text}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          className="w-full px-3 py-2 mt-2 outline-none resize-none"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-earth-600 text-white text-sm font-medium hover:bg-earth-700"
          >
            <Send className="w-4 h-4" /> Post comment
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-6">Be the first to comment on this story.</p>
        )}
        {comments.map((c) => (
          <div key={c.id} className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-earth-100 text-earth-700 grid place-items-center font-semibold">
              {c.author.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm">{c.author}</span>
                <span className="text-xs text-gray-500">{formatDate(c.date)}</span>
              </div>
              <p className="text-sm text-gray-700 mt-1 whitespace-pre-wrap">{c.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
