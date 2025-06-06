import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', margin: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
