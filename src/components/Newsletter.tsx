import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setDone(true);
    setEmail('');
  };

  return (
    <section className="bg-earth-600 rounded-2xl overflow-hidden">
      <div className="p-8 sm:p-12 text-center text-white">
        <div className="inline-grid place-items-center w-12 h-12 rounded-full bg-white/15 mb-4">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold">Stay grounded.</h3>
        <p className="mt-2 text-earth-100 max-w-md mx-auto">
          Get our best stories from around the planet delivered to your inbox, once a week.
        </p>

        {done ? (
          <div className="mt-6 inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full">
            <Check className="w-4 h-4" /> You're subscribed. Welcome aboard!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full text-ink-900 bg-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-ink-900 text-white font-medium hover:bg-black transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
