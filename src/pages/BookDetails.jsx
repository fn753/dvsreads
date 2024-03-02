import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getSingleBook } from '../utils/api';
import BookCard from '../components/BookCard';

const BookDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    const apiCall = async () => {
      const booksResponse = await getSingleBook(id);
      setBook(booksResponse);
    };
    apiCall();
  }, [id]);

  const [book, setBook] = useState();

  console.log('book', book);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bookdetail">
      <div className="bookcard-container">
        <BookCard book={book} />
      </div>
    </div>
  );
};

export default BookDetails;
