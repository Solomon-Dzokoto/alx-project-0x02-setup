import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard'; // Import UserCard
import { User } from '@/interfaces'; // Import User interface

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: User[] = await response.json();
        setUsers(data);
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

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div style={{ padding: '20px' }}>
        <h1>Users Page</h1>
        {loading && <p>Loading users...</p>}
        {error && <p style={{ color: 'red' }}>Error fetching users: {error}</p>}
        {!loading && !error && (
          <div>
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
