import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const BookCard = ({ book }) => {
  const {
    id,
    coverUrl,
    name,
    description,
    averageRating,
    haveRead,
    currentlyReading,
    wantToRead,
  } = book;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const accessToken = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [accessToken]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={coverUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/book/${id}`}>{name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          Reads: {haveRead}, Currently Reading: {currentlyReading}, Want to
          read: {wantToRead}, Average rating: {Math.floor(averageRating)}
        </Typography>
      </CardContent>
      <CardActions>
        {/* functionality for buttons is missing */}
        {isLoggedIn && <Button size="small">Set as read</Button>}
        {isLoggedIn && <Button size="small">Set as currently Reading</Button>}
        {isLoggedIn && <Button size="small">Set as want to read</Button>}
        {isLoggedIn && <Button size="small">Rate book</Button>}
      </CardActions>
    </Card>
  );
};

export default BookCard;
