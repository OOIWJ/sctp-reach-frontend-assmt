import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // const response = await axios.get('/books.json');
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Books</h1>
      <div className="row">
        {books.map(book => (
          <div key={book.id} className="col-md-4 mb-4">
            <BookCard
              id={book.id}
              imageUrl={book.image}
              title={book.title}
              author={"Author: " + book.author}
              price={book.price.toFixed(2)}
              description={book.description}
              stock={book.stock}
              // category={book.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BooksPage;