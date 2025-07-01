import * as React from 'react';

interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Paris, France',
    description: 'The city of lights and love, famous for the Eiffel Tower and exquisite cuisine.',
    imageUrl: 'https://source.unsplash.com/400x300/?paris',
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    description: 'A bustling metropolis blending tradition and technology with beautiful cherry blossoms.',
    imageUrl: 'https://source.unsplash.com/400x300/?tokyo',
  },
  {
    id: 3,
    name: 'Sydney, Australia',
    description: 'Known for its stunning harbor, Opera House, and beautiful beaches.',
    imageUrl: 'https://source.unsplash.com/400x300/?sydney',
  },
];

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: 960, margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1>Explore the World with TravelSite</h1>
        <p>Your gateway to amazing travel destinations</p>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {destinations.map(dest => (
          <div key={dest.id} style={{ width: 300, marginBottom: 30, boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: 8, overflow: 'hidden' }}>
            <img src={dest.imageUrl} alt={dest.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
            <div style={{ padding: 16 }}>
              <h2 style={{ margin: '0 0 10px' }}>{dest.name}</h2>
              <p style={{ margin: 0, color: '#555' }}>{dest.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
