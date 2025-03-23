import React from 'react';
const categories = [{
  id: 1,
  name: 'Vegetables',
  image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 123
}, {
  id: 2,
  name: 'Fruits',
  image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 87
}, {
  id: 3,
  name: 'Dairy',
  image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 45
}, {
  id: 4,
  name: 'Grains',
  image: 'https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 62
}, {
  id: 5,
  name: 'Meat',
  image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 38
}, {
  id: 6,
  name: 'Honey',
  image: 'https://images.unsplash.com/photo-1589543648472-d6abaede8630?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  count: 14
}];
export function CategorySection() {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of farm-fresh products by category
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map(category => <div key={category.id} className="relative group cursor-pointer overflow-hidden rounded-xl">
              <div className="aspect-square">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-sm opacity-80">{category.count} products</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}