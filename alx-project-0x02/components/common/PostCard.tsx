import React from 'react';
import { PostCardProps } from '@/interfaces';

const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div style={{
      border: '1px solid #0070f3', // Blue border
      padding: '15px',
      margin: '10px 0', // Margin top and bottom
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#0070f3', marginBottom: '8px' }}>{title}</h3>
      <p style={{ marginBottom: '8px' }}>{content}</p>
      <small style={{ color: '#777' }}>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
