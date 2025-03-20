import React from 'react';

export function BlogPage() {
  const posts = [
    { id: 1, title: 'Sustainable Farming Practices', date: '2024-03-15', excerpt: 'Learn about modern sustainable farming techniques...' },
    { id: 2, title: 'Market Trends in Agriculture', date: '2024-03-10', excerpt: 'Understanding current market demands for crops...' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">FarmXchange Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-gray-600">{post.excerpt}</p>
            <div className="mt-4">
              <a 
                href={`/blog/${post.id}`}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}