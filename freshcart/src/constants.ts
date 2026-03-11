import { Sparkles } from 'lucide-react';

export const CATEGORIES = [
  { id: 1, name: 'Music', image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=200' },
  { id: 2, name: "Men's Fashion", image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&q=80&w=200' },
  { id: 3, name: "Women's Fashion", image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=200' },
  { id: 4, name: 'SuperMarket', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200' },
  { id: 5, name: 'Baby & Toys', image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=200' },
  { id: 6, name: 'Home', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200' },
  { id: 7, name: 'Books', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=200' },
  { id: 8, name: 'Beauty & Health', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200' },
  { id: 9, name: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=200' },
  { id: 10, name: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200' },
];

export const PRODUCTS = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: "Woman Shawl",
  category: "Women's Fashion",
  price: [191, 149, 349, 149, 149][i % 5],
  rating: [4.2, 4.4, 4.8, 4.4, 3.2][i % 5],
  reviews: [12, 15, 9, 5, 8][i % 5],
  image: [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1520975954732-3cdd22266232?auto=format&fit=crop&q=80&w=800"
  ][i % 5],
  badge: i % 7 === 0 ? "Sale" : i % 11 === 0 ? "New" : null
}));
