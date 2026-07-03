'use client';

import { X, ShoppingBag, Star, Heart } from 'lucide-react';

interface StorePreviewProps {
  storeName: string;
  niche: string;
  slogan: string;
  onClose: () => void;
}

// Niche-specific product examples
const nicheProducts: Record<string, { name: string; price: string; image: string }[]> = {
  jewelry: [
    { name: 'Diamond Ring', price: '$299', image: '💎' },
    { name: 'Gold Necklace', price: '$149', image: '📿' },
    { name: 'Silver Earrings', price: '$89', image: '✨' },
  ],
  clothing: [
    { name: 'Summer Dress', price: '$79', image: '👗' },
    { name: 'Denim Jacket', price: '$129', image: '🧥' },
    { name: 'Cotton T-Shirt', price: '$35', image: '👕' },
  ],
  beauty: [
    { name: 'Face Serum', price: '$45', image: '🧴' },
    { name: 'Lipstick Set', price: '$32', image: '💄' },
    { name: 'Skincare Kit', price: '$89', image: '✨' },
  ],
  home: [
    { name: 'Decorative Vase', price: '$49', image: '🏺' },
    { name: 'Cozy Blanket', price: '$65', image: '🛋️' },
    { name: 'Wall Art', price: '$89', image: '🖼️' },
  ],
  tech: [
    { name: 'Wireless Earbuds', price: '$79', image: '🎧' },
    { name: 'Phone Case', price: '$25', image: '📱' },
    { name: 'Smart Watch', price: '$199', image: '⌚' },
  ],
  food: [
    { name: 'Organic Coffee', price: '$18', image: '☕' },
    { name: 'Artisan Chocolate', price: '$24', image: '🍫' },
    { name: 'Gourmet Snacks', price: '$15', image: '🍪' },
  ],
  fitness: [
    { name: 'Yoga Mat', price: '$35', image: '🧘' },
    { name: 'Resistance Bands', price: '$25', image: '💪' },
    { name: 'Water Bottle', price: '$22', image: '💧' },
  ],
  pets: [
    { name: 'Dog Bed', price: '$59', image: '🐕' },
    { name: 'Cat Tree', price: '$89', image: '🐱' },
    { name: 'Pet Toys', price: '$15', image: '🎾' },
  ],
  books: [
    { name: 'Bestseller Novel', price: '$24', image: '📚' },
    { name: 'Self-Help Book', price: '$19', image: '📖' },
    { name: 'Children Book', price: '$15', image: '📗' },
  ],
  garden: [
    { name: 'Plant Pot', price: '$29', image: '🪴' },
    { name: 'Garden Tools', price: '$45', image: '🌱' },
    { name: 'Seeds Pack', price: '$12', image: '🌻' },
  ],
};

export default function StorePreview({ storeName, niche, slogan, onClose }: StorePreviewProps) {
  const products = nicheProducts[niche] || nicheProducts.clothing;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Store Preview</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Store Mockup */}
        <div className="p-6">
          {/* Store Header */}
          <div className="bg-gradient-to-r from-[#96bf48] to-[#5E8E3E] rounded-xl p-6 mb-6 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl">
                🏪
              </div>
              <div>
                <h1 className="text-2xl font-bold">{storeName}</h1>
                <p className="text-white/90 text-sm">"{slogan}"</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Free Shipping</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">24/7 Support</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Secure Payment</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-6xl" role="img" aria-label={product.name}>
                    {product.image}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{product.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[#96bf48] font-bold">{product.price}</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <button className="w-full mt-3 bg-[#96bf48] hover:bg-[#5E8E3E] text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to launch your store?
            </h3>
            <p className="text-gray-600 mb-4">
              Start selling with {storeName} on Shopify today
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Close Preview
              </button>
              <button className="px-6 py-3 bg-[#96bf48] hover:bg-[#5E8E3E] text-white rounded-lg font-medium transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
