import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const result = await response.json();
        // The API returns data in a "data" property
        // Limit to 40 products as requested by the user
        setProducts((result.data || []).slice(0, 40));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="flex h-64 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 rounded-lg bg-emerald-600 px-6 py-2 text-white"
        >
          Retry
        </button>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Featured Products</h2>
          <p className="mt-2 text-gray-500">Handpicked items just for you</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border border-emerald-600 bg-emerald-600 px-6 py-2 text-sm font-bold text-white transition-all">
            All
          </button>
          <button className="rounded-full border border-gray-200 px-6 py-2 text-sm font-bold text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition-all">
            Fashion
          </button>
          <button className="rounded-full border border-gray-200 px-6 py-2 text-sm font-bold text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition-all">
            Electronics
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id || product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
