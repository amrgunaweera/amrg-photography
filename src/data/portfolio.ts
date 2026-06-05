export type Category = 'Nature' | 'Travel' | 'Macro' | 'Landscape' | 'Wildlife' | 'Astrophotography';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  featured: boolean;
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Misty Mountains',
    category: 'Landscape',
    imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: '2',
    title: 'Alpine Flora',
    category: 'Macro',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: '3',
    title: 'Desert Dunes',
    category: 'Travel',
    imageUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: '4',
    title: 'Forest Canopy',
    category: 'Nature',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectRatio: 'landscape',
  },
  {
    id: '5',
    title: 'Milky Way over Valley',
    category: 'Astrophotography',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectRatio: 'portrait',
  },
  {
    id: '6',
    title: 'Monarch Detail',
    category: 'Macro',
    imageUrl: 'https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    aspectRatio: 'landscape',
  },
  {
    id: '7',
    title: 'Coastal Highway',
    category: 'Travel',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    featured: false,
    aspectRatio: 'portrait',
  },
  {
    id: '8',
    title: 'Winter Wildlife',
    category: 'Wildlife',
    imageUrl: 'https://images.unsplash.com/photo-1489674267075-cee793167910?auto=format&fit=crop&w=800&q=80',
    featured: true,
    aspectRatio: 'portrait',
  },
];

export const getFeaturedWork = () => portfolioData.filter(item => item.featured);
export const getPortfolioByCategory = (category: string) => {
  if (category === 'All') return portfolioData;
  return portfolioData.filter(item => item.category === category as Category);
};
