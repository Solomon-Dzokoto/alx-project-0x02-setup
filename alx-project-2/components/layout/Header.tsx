import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid #ccc', backgroundColor: '#f0f0f0' }}>
      <Link href="/home">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
      <Link href="/posts">
        Posts
      </Link>
      <Link href="/users">
        Users
      </Link>
    </header>
  );
}
