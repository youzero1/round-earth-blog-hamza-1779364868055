import type { Post } from '@/types';

export const POSTS: Post[] = [
  {
    id: '1',
    slug: 'whispers-of-the-amazon',
    title: 'Whispers of the Amazon: A Journey Into the Green Lung',
    excerpt: 'Deep inside the world\'s largest rainforest, indigenous communities are guarding secrets that could change how we see climate, biodiversity, and ourselves.',
    content: 'The first thing you notice in the Amazon is the sound. Not silence, never silence, but a vast living orchestra of frogs, insects, monkeys, and birds you will never see.\n\n## A Living Library\n\nFor more than two weeks, our small team paddled along tributaries of the Rio Negro, accompanied by guides from the Baré people. Every leaf, they explained, has a name and a purpose. Every bend in the river has a story.\n\n> "The forest is not a resource. It is a relative."\n\n## Climate at a Crossroads\n\nRecent satellite data suggests that parts of the eastern Amazon are now emitting more carbon than they absorb — a tipping point scientists feared but hoped to avoid. Yet in protected indigenous territories, the forest is still thriving.\n\nThe lesson is uncomfortably simple: where people who love the land are in charge, the land survives.',
    cover: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80',
    category: 'Nature',
    author: 'Lena Okafor',
    authorAvatar: 'https://i.pravatar.cc/150?img=47',
    date: '2025-03-12',
    readTime: 8,
    tags: ['rainforest', 'climate', 'culture'],
    featured: true,
  },
  {
    id: '2',
    slug: 'midnight-sun-over-svalbard',
    title: 'Midnight Sun Over Svalbard',
    excerpt: 'Above the Arctic Circle, the sun refuses to set for months. Here is what life looks like at the edge of the world.',
    content: 'Svalbard is a place where polar bears outnumber traffic lights, where coal mines have become museums, and where scientists from forty nations gather to listen to the planet breathe.\n\n## A Frozen Archive\n\nThe Global Seed Vault, buried in a mountainside outside Longyearbyen, holds more than a million seed samples — a backup plan for civilization itself.\n\n## Warming Faster Than Anywhere\n\nThe Arctic is heating up nearly four times faster than the global average. Glaciers that took millennia to form are vanishing within a single human lifetime.',
    cover: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    category: 'Travel',
    author: 'Henrik Larsen',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    date: '2025-02-28',
    readTime: 6,
    tags: ['arctic', 'science', 'travel'],
  },
  {
    id: '3',
    slug: 'the-coral-gardeners',
    title: 'The Coral Gardeners of the Pacific',
    excerpt: 'In French Polynesia, a small team of divers is replanting reefs one fragment at a time — and the science says it might just work.',
    content: 'Beneath the turquoise water of Mo\'orea, Titouan ties a thumb-sized piece of coral to a metal frame. In three years, it could grow into a thriving reef.\n\n## Why Reefs Matter\n\nCoral reefs cover less than 1% of the ocean floor but support roughly 25% of all marine species. They also protect coastlines from storms and feed hundreds of millions of people.\n\n## A Race Against Heat\n\nThe ocean has absorbed more than 90% of the excess heat from human-caused warming. Mass bleaching events are now near-annual in many regions.',
    cover: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&q=80',
    category: 'Ocean',
    author: 'Maya Tane',
    authorAvatar: 'https://i.pravatar.cc/150?img=32',
    date: '2025-02-14',
    readTime: 5,
    tags: ['ocean', 'conservation'],
    featured: true,
  },
  {
    id: '4',
    slug: 'cities-that-breathe',
    title: 'Cities That Breathe: Urban Forests of Tomorrow',
    excerpt: 'From Milan to Singapore, architects are weaving forests into skylines. Is this the future of urban living?',
    content: 'When you step out of Milano Porta Garibaldi station and look up, you see something strange: trees, growing out of a building.\n\n## The Vertical Forest\n\nBosco Verticale hosts more than 20,000 plants across two residential towers. The trees absorb CO2, filter dust, and lower the surrounding temperature by several degrees.\n\n## Beyond Aesthetics\n\nGreen architecture is no longer a luxury — it\'s a survival strategy. Cities are heating faster than the countryside, and trees are some of our most powerful allies.',
    cover: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80',
    category: 'Cities',
    author: 'Arjun Mehta',
    authorAvatar: 'https://i.pravatar.cc/150?img=15',
    date: '2025-01-30',
    readTime: 7,
    tags: ['architecture', 'climate', 'cities'],
  },
  {
    id: '5',
    slug: 'sahara-solar-dreams',
    title: 'Sahara Solar Dreams',
    excerpt: 'Could the world\'s largest desert power a continent? Engineers in Morocco believe the answer is already shining down on them.',
    content: 'Noor Ouarzazate is one of the largest concentrated solar power plants on Earth. It uses mirrors arranged in vast arcs to focus sunlight onto a single tower, generating enough electricity for more than a million people.\n\n## A New Energy Map\n\nMorocco aims to source more than half of its electricity from renewables by 2030. The Sahara, long seen as empty, may become one of humanity\'s most generous power plants.\n\n## The Catch\n\nMega-projects bring mega-questions: who owns the land, who profits, and who keeps the lights on when the sun sets?',
    cover: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    category: 'Energy',
    author: 'Yasmine El Idrissi',
    authorAvatar: 'https://i.pravatar.cc/150?img=44',
    date: '2025-01-18',
    readTime: 6,
    tags: ['energy', 'africa', 'innovation'],
  },
  {
    id: '6',
    slug: 'rewilding-the-highlands',
    title: 'Rewilding the Scottish Highlands',
    excerpt: 'After centuries of deforestation, a quiet revolution is bringing wolves, beavers, and ancient forests back to Scotland.',
    content: 'The Scottish Highlands look wild, but they are in fact one of the most ecologically damaged landscapes in Europe. Centuries of sheep grazing and deer overpopulation have stripped the hills bare.\n\n## A Slow Return\n\nOn estates like Glenfeshie and Alladale, native pines are creeping back up the slopes. Beavers, reintroduced after a 400-year absence, are reshaping the rivers.\n\n## What Wild Means\n\nRewilding is less about going backward and more about giving nature room to write its own next chapter.',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
    category: 'Nature',
    author: 'Fiona MacLeod',
    authorAvatar: 'https://i.pravatar.cc/150?img=23',
    date: '2025-01-05',
    readTime: 5,
    tags: ['rewilding', 'europe', 'wildlife'],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: Post, count: number = 3): Post[] {
  return POSTS.filter((p) => p.id !== post.id && p.category === post.category)
    .concat(POSTS.filter((p) => p.id !== post.id && p.category !== post.category))
    .slice(0, count);
}

export function getCategories(): string[] {
  const set = new Set<string>();
  POSTS.forEach((p) => set.add(p.category));
  return Array.from(set);
}
