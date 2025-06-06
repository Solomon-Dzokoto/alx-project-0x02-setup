import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard'; // Import PostCard
import { Post } from '@/interfaces'; // Import Post interface

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Posts Page</h1>
        {loading && <p>Loading posts...</p>}
        {error && <p style={{ color: 'red' }}>Error fetching posts: {error}</p>}
        {!loading && !error && (
          <div>
            {posts.map(post => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.body} // Map API's 'body' to 'content' prop
                userId={post.userId}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
