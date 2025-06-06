export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  shape?: ButtonShape;
  children: React.ReactNode;
}

export interface Post {
  userId: number;
  id: number; // Usually, API provides an id for the post itself
  title: string;
  body: string; // JSONPlaceholder uses 'body' for content
}

// This will be the props for the PostCard component
export interface PostCardProps {
  title: string;
  content: string; // Renaming 'body' to 'content' for the component
  userId: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// Props for the UserCard component
export interface UserCardProps {
  user: User; // Pass the whole user object
}
