import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BooksPage from './BooksPage';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import AboutPage from './AboutPage';
import ShoppingCart from './ShoppingCart';
import { useFlashMessage } from './FlashMessageStore';
import { Route, Switch } from 'wouter';
import UserLogin from "./UserLogin"


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
        <Route path="/cart" component={ShoppingCart} />        
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/about" component={AboutPage} />
      </Switch>



      <footer>
        <br />
        <hr />
        <p>Copyright © 2024 JEN</p>
      </footer>

    </>
  );
}

export default App;
