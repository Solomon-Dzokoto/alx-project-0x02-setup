import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; // Import PostModal

// Define a type for a post
interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([ // Store posts in state
    { title: "First Card", content: "This is the content for the first card." },
    { title: "Second Card", content: "Some different content here for the second card." }
  ]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddPost = (newPost: Post) => {
    setPosts(prevPosts => [...prevPosts, newPost]); // Add new post to the list
  };

  return (
    <>
      <Header />
      <div>
        <h1>Home Page</h1>
        <button onClick={handleOpenModal} style={{ margin: '10px 0', padding: '10px 15px' }}>
          Create New Post
        </button>

        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddPost}
        />

        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </>
  );
}
