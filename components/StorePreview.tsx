'use client';

import { X, ShoppingBag, Star, Heart, Sparkles, Zap, Shield, Truck } from 'lucide-react';

interface StorePreviewProps {
  storeName: string;
  niche: string;
  slogan: string;
  onClose: () => void;
}

// Niche-specific product examples
const nicheProducts: Record<string, { name: string; price: string; image: string; badge?: string }[]> = {
  jewelry: [
    { name: 'Diamond Ring', price: '$299', image: '💎', badge: 'Bestseller' },
    { name: 'Gold Necklace', price: '$149', image: '📿', badge: 'New' },
    { name: 'Silver Earrings', price: '$89', image: '✨' },
  ],
  clothing: [
    { name: 'Summer Dress', price: '$79', image: '👗', badge: 'Trending' },
    { name: 'Denim Jacket', price: '$129', image: '🧥' },
    { name: 'Cotton T-Shirt', price: '$35', image: '👕', badge: 'Sale' },
  ],
  beauty: [
    { name: 'Face Serum', price: '$45', image: '🧴', badge: 'Organic' },
    { name: 'Lipstick Set', price: '$32', image: '💄' },
    { name: 'Skincare Kit', price: '$89', image: '✨', badge: 'Bundle' },
  ],
  home: [
    { name: 'Decorative Vase', price: '$49', image: '🏺' },
    { name: 'Cozy Blanket', price: '$65', image: '🛋️', badge: 'Popular' },
    { name: 'Wall Art', price: '$89', image: '🖼️' },
  ],
  tech: [
    { name: 'Wireless Earbuds', price: '$79', image: '🎧', badge: 'Top Rated' },
    { name: 'Phone Case', price: '$25', image: '📱' },
    { name: 'Smart Watch', price: '$199', image: '⌚', badge: 'New' },
  ],
  food: [
    { name: 'Organic Coffee', price: '$18', image: '☕', badge: 'Fair Trade' },
    { name: 'Artisan Chocolate', price: '$24', image: '🍫' },
    { name: 'Gourmet Snacks', price: '$15', image: '🍪' },
  ],
  fitness: [
    { name: 'Yoga Mat', price: '$35', image: '🧘', badge: 'Eco-Friendly' },
    { name: 'Resistance Bands', price: '$25', image: '💪' },
    { name: 'Water Bottle', price: '$22', image: '💧' },
  ],
  pets: [
    { name: 'Dog Bed', price: '$59', image: '🐕', badge: 'Best Seller' },
    { name: 'Cat Tree', price: '$89', image: '🐱' },
    { name: 'Pet Toys', price: '$15', image: '🎾' },
  ],
  books: [
    { name: 'Bestseller Novel', price: '$24', image: '📚', badge: 'Award Winner' },
    { name: 'Self-Help Book', price: '$19', image: '📖' },
    { name: 'Children Book', price: '$15', image: '📗' },
  ],
  garden: [
    { name: 'Plant Pot', price: '$29', image: '🪴' },
    { name: 'Garden Tools', price: '$45', image: '🌱', badge: 'Premium' },
    { name: 'Seeds Pack', price: '$12', image: '🌻' },
  ],
};

export default function StorePreview({ storeName, niche, slogan, onClose }: StorePreviewProps) {
  const products = nicheProducts[niche] || nicheProducts.clothing;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Store Preview
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all hover:scale-110"
            aria-label="Close preview"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Store Mockup */}
        <div className="p-8">
          {/* Store Header */}
          <div className="relative bg-gradient-to-r from-[#96bf48] via-[#7aa835] to-[#5E8E3E] rounded-3xl p-8 mb-8 text-white overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-xl animate-float">
                  🏪
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">{storeName}</h1>
                  <p className="text-white/90 text-lg italic">"{slogan}"</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Truck className="w-4 h-4" />
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#96bf48]" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Products</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-[#96bf48]/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-4 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300" role="img" aria-label={product.name}>
                    {product.image}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{product.name}</h4>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-[#96bf48]">{product.price}</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="text-sm font-bold">4.8</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-[#96bf48] animate-pulse" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Ready to launch your store?
              </h3>
              <Sparkles className="w-8 h-8 text-[#96bf48] animate-pulse" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Start selling with <span className="font-bold text-[#96bf48]">{storeName}</span> on Shopify today
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onClose}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:scale-105"
              >
                Close Preview
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] hover:from-[#5E8E3E] hover:to-[#4a7a35] text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-2xl hover:scale-105 animate-pulse-glow flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
