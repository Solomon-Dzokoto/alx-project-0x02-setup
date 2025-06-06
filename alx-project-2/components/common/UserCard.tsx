import React from 'react';
import { UserCardProps } from '@/interfaces';

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={{
      border: '1px solid #28a745', // Green border
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ color: '#28a745', marginBottom: '8px' }}>{user.name} (@{user.username})</h3>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <div style={{ marginTop: '10px' }}>
        <strong>Address:</strong>
        <p style={{ marginLeft: '10px' }}>
          {user.address.street}, {user.address.suite}<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div style={{ marginTop: '10px' }}>
        <strong>Company:</strong>
        <p style={{ marginLeft: '10px' }}>
          {user.company.name}<br />
          <em>{user.company.catchPhrase}</em>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
