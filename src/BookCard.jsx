import React from 'react';
import { useCart } from './CartStore';
import { useLocation } from 'wouter';
import { useFlashMessage } from './FlashMessageStore';
import axios from 'axios';
import {useJwt} from './UserStore';

const BookCard = (props) => {
  const { addToCart } = useCart();
  const { getJwt } = useJwt();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const handleAddToCart = async () => {
    const jwt = getJwt();
    try { 
      
      console.log(props.id); 
      const response = await axios.put( 
        `${import.meta.env.VITE_API_URL}/api/cart`, 
        {  
          cartItems: [ 
            { book_id: props.id, quantity: 1 } // Match the backend's structure 
          ]  
        }, 
        { 
          headers: { 
            Authorization: `Bearer ${jwt}`, 
          }, 
        } 
      ); 
 
    } catch (error) { 
      console.log(props.id) 
      console.error('Error adding to cart:', error.response?.data || error.message); 
      console.log(error.message) 
      console.error('Error adding to cart:', error); 
    }


    addToCart(props);

    showMessage('Item added to cart', 'success');
    setLocation('/cart');
  }

  return (
    <div className="card">
      <img
        src={props.imageUrl}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-description">{props.description}</p>
        <h6 className="card-author">{props.author}</h6>
        <p className="card-text">${props.price}</p>

        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;