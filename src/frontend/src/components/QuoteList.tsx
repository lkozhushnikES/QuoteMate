import React, { useEffect, useState } from 'react';
import { fetchQuotes } from '../api/quotes';
import { Quote } from '../types';

const QuoteList: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuotes()
      .then(setQuotes)
      .catch(e => setError(e.message));
  }, []);

  if (error) return <p>Error loading quotes: {error}</p>;

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map(q => (
          <li key={q.id}>{q.id} - {q.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;