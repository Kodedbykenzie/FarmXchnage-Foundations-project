import React from 'react';
import { useParams } from 'react-router-dom';

export function PostPage() {
  const { postId } = useParams<{ postId: string }>();

  // Mock post data
  const post = {
    id: postId,
    title: 'Sustainable Farming Practices',
    date: '2024-03-15',
    content: `
      <p>Sustainable farming is crucial for modern agriculture...</p>
      <h2>Key Practices</h2>
      <ul>
        <li>Crop Rotation</li>
        <li>Organic Fertilizers</li>
        <li>Water Conservation</li>
      </ul>
    `
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <div className="mb-4">
          <a href="/blog" className="text-green-600 hover:text-green-700">
            ← Back to Blog
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-8">
          Published on {new Date(post.date).toLocaleDateString()}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
}