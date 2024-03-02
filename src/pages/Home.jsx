import { useEffect, useState } from 'react';
import { getAllBooks } from '../utils/api';
import { Grid, Box, Button, Typography } from '@mui/material';

import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const booksResponse = await getAllBooks();
      setBooks(booksResponse);
    };
    apiCall();
  }, []);

  const sortBooks = (sortOption) => {
    let sortedBooks = [...books];
    switch (sortOption) {
      case 'mostRead':
        sortedBooks.sort((a, b) => b.haveRead - a.haveRead);
        break;
      case 'mostWantToRead':
        sortedBooks.sort((a, b) => b.wantToRead - a.wantToRead);
        break;
      case 'highestRating':
        sortedBooks.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'name':
        sortedBooks.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    setBooks(sortedBooks);
  };

  //console.log('books', books);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="sort">
        <Typography ml={2}>Sort by</Typography>
        <Button onClick={() => sortBooks('mostRead')}>Most Read</Button>
        <Button onClick={() => sortBooks('mostWantToRead')}>
          Most Want to Read
        </Button>
        <Button onClick={() => sortBooks('highestRating')}>
          Highest Rating
        </Button>
        <Button onClick={() => sortBooks('name')}>Name</Button>
      </div>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid ml={4} mb={2} xs={2} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
