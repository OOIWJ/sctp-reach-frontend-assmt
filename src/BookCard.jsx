import React from 'react';
import { useCart } from './CartStore';
import {useLocation} from 'wouter';
import { useFlashMessage } from './FlashMessageStore';

const BookCard = (props) => {
  const { addToCart} = useCart();
  const [, setLocation] = useLocation();
  const { showMessage } = useFlashMessage();

  const handleAddToCart = () => {    
    addToCart(props);
    showMessage('Item added to cart', 'success');
    setLocation('/cart');
  }

  return (
    <div className="card">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
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