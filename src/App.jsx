import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BooksPage from './BooksPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import AboutPage from './AboutPage';
import { useFlashMessage } from './FlashMessageStore';
import { Route, Switch } from 'wouter';

function App() {
  const { getMessage, clearMessage } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
      , 3000);
    return () => {
      clearTimeout(timer);
    };
  }
    , [flashMessage]);

  return (
    <>

      <Navbar />

      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}
      
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>

      {/* 
      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to E-Shop</h1>
          <p className="lead">Discover amazing products at unbeatable prices!</p>
          <a href="#" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <BookCard
              image="https://picsum.photos/id/20/300/200"
              title="Book 1"
              author="Author 1"
              price="19.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <BookCard
              imageUrl="https://picsum.photos/id/1/300/200"
              title="Book 2"
              author="Author 2"
              price="29.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <BookCard
              imageUrl="https://picsum.photos/id/26/300/200"
              title="Book 3"
              author="Author 3"
              price="39.99"
            />
          </div>

          <div className="col-md-3 mb-4">
            <BookCard
              imageUrl="https://picsum.photos/id/96/300/200"
              title="Book 4"
              author="Author 4"
              price="49.99"
            />
          </div>
        </div>
      </main> 
      */}


      <footer>
        <br />
        <hr />
        <p>Copyright © 2024 JEN</p>
      </footer>

    </>
  );
}

export default App;
