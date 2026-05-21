import { Globe2, Leaf, Users, Compass } from 'lucide-react';

export default function About() {
  const values = [
    { icon: Leaf, title: 'Rooted in reporting', text: 'Every story starts in the field, with the people and ecosystems it describes.' },
    { icon: Users, title: 'Community first', text: 'We center the voices of those most affected by environmental change.' },
    { icon: Compass, title: 'Globally minded', text: 'From the Arctic to the Atacama — we follow stories wherever they lead.' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="inline-grid place-items-center w-14 h-14 rounded-full bg-earth-600 text-white mb-6">
        <Globe2 className="w-7 h-7" />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">About roundEarth</h1>
      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        roundEarth is an independent magazine for people who still believe the world is worth paying attention to.
        We publish long-form stories about the planet — its forests, oceans, cities, and the humans who care for them.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Founded in 2024 by a small team of journalists, scientists, and designers, we believe that good storytelling
        is one of the most effective tools we have for shaping a livable future. We are reader-supported and run
        without advertising — only stories.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div key={v.title} className="p-5 rounded-xl border border-earth-100 bg-white">
              <Icon className="w-5 h-5 text-earth-600" />
              <h3 className="font-semibold mt-3">{v.title}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{v.text}</p>
            </div>
          );
        })}
      </div>

      <blockquote className="mt-12 border-l-4 border-earth-500 pl-5 italic text-gray-700">
        "We don't inherit the Earth from our ancestors; we borrow it from our children."
      </blockquote>
    </div>
  );
}
