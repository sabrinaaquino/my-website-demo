import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/header';
import Link from 'next/link';

const PUBLICATION_ID = "6199dbc85bb9cc256fc6a2b2";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const subscribeToNewsletter = async () => {
    setLoading(true);

    const mutation = `
      mutation {
        subscribeToNewsletter(input: {
          publicationId: "${PUBLICATION_ID}", 
          email: "${email}"
        }) {
          status
        }
      }
    `;

    try {
      const response = await axios.post('https://your-graphql-endpoint.com', {
        query: mutation
      });

      if (response.data.status === 'success') {
        setMessage('Subscription successful!');
      } else {
        setMessage('Subscription failed.');
      }
    } catch (error: any) {
      setMessage('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <div className="flex items-center justify-center ">
      <Header />
      <img src="/avatar.png" alt="Sabrina" className="w-32 ml-20 transform rotate-180" />
      </div>
      <div className="flex flex-col items-center justify-start pt-40 min-h-screen">
        <img 
            src="/Ackchyually.jpg" 
            alt="Ackchyually" 
            className="w-32 h-32 rounded-full object-cover mb-2"
        />
        <h1 className="mb-4 text-2xl font-bold text-center">Ackchyually</h1>
        <p className="mb-4 text-center text-gray-500">Always know the next nerd thing to say</p>
        <div className="w-full max-w-md">
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="w-full px-3 py-2 mb-4 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            placeholder="enter your email"
          />
          <div className="flex justify-center">
            <button 
              onClick={subscribeToNewsletter} 
              disabled={loading}
              className="w-1/4 px-3 py-2 text-white bg-gray-500 rounded shadow hover:bg-gray-400 focus:shadow-outline focus:outline-none"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          {message && <p>{message}</p>}
        </div>
      </div>
      </div>
  );
};

export default Newsletter;