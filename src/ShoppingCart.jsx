import React, { useEffect, useRef, useState } from 'react';
import { useCart } from './CartStore';
import { useJwt } from './UserStore';
import axios from 'axios';

const ShoppingCart = () => {
  const { cart, getCartTotal, modifyQuantity, removeFromCart, setCartContent } = useCart();
  const { getJwt } = useJwt();
  const [isUpdating, setIsUpdating] = useState(false);
  const isFirstRender = useRef(true); // Track first render

  const fetchCart = async () => {
    const jwt = getJwt();
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + '/api/cart', {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log('Cart:', response.data);
      setCartContent(response.data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
    return ()=>{console.log('cleanup')}
  }, []);

  const updateCart = async () => {
    setIsUpdating(true);
    const jwt = getJwt();
    try {
      const updatedCart = cart.map((item) => ({
        book_id: item.book_id,
        quantity: item.quantity
      }));

      await axios.put(import.meta.env.VITE_API_URL + '/api/cart', { cartItems: updatedCart }, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
    } catch (error) {
      console.error('Error updating cart:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Skip the first render
    }
    updateCart();
    return ()=>{console.log('cleanup')}
  }, [cart]);

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{ width: "400px" }}>
                  <img src={item.imageUrl} alt={item.title} className="card-image" />
                </div>
                <div style={{ width: "600px" }}>
                  <h5>{item.title}</h5>
                  <h6>{item.author}</h6>
                  <p>{item.description}</p>
                  <br></br>
                  <div className="d-flex align-items-left">
                    <button className="btn btn-sm btn-secondary me-2" 
                    onClick={() => modifyQuantity(item.book_id, item.quantity - 1)}
                    disabled={isUpdating}
                    >-</button>
                    <p className="mb-0">Quantity: {item.quantity}</p>
                    <button className="btn btn-sm btn-secondary ms-2" 
                    onClick={() => modifyQuantity(item.book_id, item.quantity + 1)}
                    disabled={isUpdating}
                    >+</button>
                    <button className="btn btn-sm btn-danger ms-2" 
                    onClick={() => removeFromCart(item.book_id)}
                    disabled={isUpdating}
                    >Remove</button>
                  </div>
                </div>
                <span className="fs-5">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-end">
            <h4>Total: ${getCartTotal()}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;